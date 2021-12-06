import React, { Component } from 'react';
import QuestionsServices from '../Services/QuestionsServices';
import AnswersServices from '../Services/AnswersServices';
import { Platform, StyleSheet, View, Text } from 'react';

class ViewQuestion extends Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            questionID: this.props.match.params.id,
            body: '',
            question: [],
            answers: []
        }
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.saveAnswer = this.saveAnswer.bind(this);
        this.setBest = this.setBest.bind(this);
    }
    
    componentDidMount() 
    {
        QuestionsServices.getQuestionById(this.state.id).then(
            (res) => {
                this.setState({ question: res.data });
            });
        
        AnswersServices.getAnswers().then(
            (res) => {
                this.setState({ answers: res.data });
            });
    }
    
    changeBodyHandler = (event) => {
        this.setState({ body: event.target.value });
    }
    
    saveAnswer = (a) => {
        alert('Your answer was posted successfully!');
        a.preventDefault();
        let ans = {
            questionID: this.props.match.params.id,
            body: this.state.body
        }
        console.log('ans => ' + JSON.stringify(ans));
        AnswersServices.createAnswer(ans);
        window.location.reload();
    }

    setBest =(a) => {
        let q_and_a = {
            qid: this.state.question.id,
            rid: a
        }
        QuestionsServices.setBestAnswer(q_and_a);
        window.location.reload();
    }
    
    cancellationAlert() 
    {
        window.location.reload();
    }
    
    render()
    {
        let a = localStorage.getItem("username");
        return (
            <div>
                <div className="askedQuestionBox">
                    <div className="h2">
                        <h2>Question #{this.state.question.id}</h2>
                    </div>
                    <div>
                        <div>
                            <h2 style={{ marginLeft: "60px" }}> <b> {this.state.question.q_title} </b> </h2>
                        </div>
                        <div>
                            <h4 style={{ marginLeft: "60px" }}> {this.state.question.q_text} </h4>
                        </div>
                        <div>
                            <h6 style={{ marginLeft: "60px" }}> Asked by: {this.state.question.username} </h6>
                        </div>
                    </div>
                </div>
                <div className="aNavigation">
                    <div>
                        <div className="h2">
                            <h2>Answers</h2>
                        </div>
                        <div>
                            {
                                this.state.answers
                                .filter(
                                    answer => 
                                    answer.questionID == this.props.match.params.id)
                                .map(
                                    answer => 
                                    <div>
                                        <div className="ans" key = {answer.replyID}>
                                            <div style={{ marginLeft: "60px", backgroundColor: answer.bestAnswer===false ? "" : "lightgreen"}}  className="ansBody">{answer.body}</div>
                                            <div style={{ marginLeft: "60px" }} className="ansRating"> rating: {answer.rating}</div>
                                            {a===this.state.question.username ? <div><input type="submit" style={{ marginLeft: "60px" }} onClick={() => this.setBest(answer.replyID)} value="Choose as best"></input></div> : ""}
                                        </div>
                                    </div>
                                    ) 
                            }
                        </div>
                    </div>
                </div>
                <div className="ansbox">
                    <div className="h2">
                        <h2>Post your Answer! # {this.state.question.id}</h2>
                    </div>
                    <form className="form" className="text-center">
                        <input className="answer" type="text"
                            placeholder="Enter your answer"
                            name="ans" id="ans"
                            value={this.state.body}
                            onChange={this.changeBodyHandler}
                            required></input>
                        <form action="/action_page.php">
                            <label for="img">Select image:</label>
                            <input type="file" id="img" name="img" accept="image/*" />
                            <input className="submit" type="submit" value="Upload" />
                        </form>
                        <br />
                        <input className="submit" type="submit" value="Submit"
                            disabled={this.state.body.length < 1} onClick={this.saveAnswer} />
                        <input className="submit" type="submit" value="Cancel" onClick={this.cancellationAlert} />
                        <br />
                    </form>
                </div>
            </div>
        );
    }
}
export default ViewQuestion;
