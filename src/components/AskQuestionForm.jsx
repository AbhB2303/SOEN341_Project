import React, { Component } from 'react';
import QuestionsServices from '../Services/QuestionsServices';
class AskQuestionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            q_title: '',
            q_text: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeTextHandler = this.changeTextHandler.bind(this);
        this.saveQuestion = this.saveQuestion.bind(this);
    }
    changeTitleHandler=(event) => {
        this.setState({q_title: event.target.value});
    }
    changeTextHandler=(event) => {
        this.setState({q_text: event.target.value});
    }
    saveQuestion = (q) => {
        alert('Your question was posted successfully!');
        q.preventDefault();
        let question = {
            q_text: this.state.q_text,
            q_title: this.state.q_title
        }
        console.log('question => ' + JSON.stringify(question));
        QuestionsServices.createQuestion(question);
        window.location.reload();
    }
    	cancellationAlert() {
            window.location.reload();
    }
    render() {
        return (
            <div className="box">
                <div className="h2">
                    <h2>Post a New Question!</h2>
                </div>
                <form className="form" className="text-center">
                    <input className="title" type="text" 
                    placeholder="Enter the title of your question"
                        name="q_title" id="q_title"
                        value={this.state.q_title} 
                        onChange={this.changeTitleHandler}
                        required></input>
                    <br /><br />
                    <input className="question" type="text" 
                    placeholder="Enter your question"
                        name="q_text" id="q_text" 
                        value={this.state.q_text}
                        onChange={this.changeTextHandler} 
                        required></input>
                    <form action="/action_page.php">
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    <input className="submit" type="submit" value="Upload"/>
                    </form>
                    <br />
                    <input className="submit" type="submit" value="Submit" 
                    disabled={this.state.q_text.length<1 || this.state.q_title.length<1} onClick={this.saveQuestion}/>
         	     	<input className="submit" type="submit" value="Cancel" onClick={this.cancellationAlert} />
                    <br />
                </form>
            </div>
        )
    }
}
export default AskQuestionForm;