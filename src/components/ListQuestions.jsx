import React, { Component } from 'react';
import QuestionsServices from '../Services/QuestionsServices';
import { Link } from "react-router-dom"; 

class ListQuestions extends Component 
{
    constructor (props)
    {
        super(props);
        this.state = 
        {
            questions: []
        }
        this.addQuestion = this.addQuestion.bind(this);
    }
    componentDidMount()
    {
        QuestionsServices.getQuestions().then((res) => {
            this.setState({questions: res.data});
        });
    }
    render() 
    {
        return (
            <div>
                <div className="h2">
                    <h2>See Other Questions!</h2>
                </div>
                <div className="row">
                    <table>
                        <div>
                            <tr>
                                <th>Asked By User</th>
                                <th>Question Title</th>
                                <th>Question Text</th>
                            </tr>
                        </div>
                        <div>
                            {
                                this.state.questions.map(
                                    question => 
                                    <tr key = {question.q_id}>
                                        <td><b>{question.username}</b></td>
                                        <td>{question.q_title}</td>
                                        <td>{question.q_text}</td>
                                    </tr>
                                )
                            }
                        </div>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListQuestions;
