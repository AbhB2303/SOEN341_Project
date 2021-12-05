import React, { Component } from 'react';
import { Link } from "react-router-dom";
import QuestionsServices from '../Services/QuestionsServices';

class profile extends Component 
{
    constructor (props) 
    {
        super(props);
        this.state = {
            questions: []
        }
    }
    
    componentDidMount()
    {
        QuestionsServices.getQuestions().then((res) => {
            this.setState({questions: res.data});
        });
    }
    
    logOutTheUser = () => {
        localStorage.setItem("username", "");
        alert("You have been logged out!");
        this.props.history.push('/');
    }
    
    render()
    {
        let a = localStorage.getItem("username");
        return (
            <div>
                <i> You are already logged in. {"Welcome " + a + "!"} </i>
                <div style={{ textAlign: "right" }}> <input className="submit" type="submit" value="Log Out" onClick={this.logOutTheUser} /> </div>
                <div className="qNavigation">
                    <div className="h2">
                        <h2>My Previous Asked Questions!</h2>
                    </div>
                    <div className="row">
                        <table>
                            <div>
                                <tr>
                                    <th>Asked By User</th>
                                    <th>Question Title</th>
                                    <th>Question Text</th>
                                    <th>View Question</th>
                                </tr>
                            </div>
                            <div>
                                {
                                    this.state.questions
                                     .filter(
                                         question => 
                                         question.username.toLocaleLowerCase() === a.toLocaleLowerCase())
                                     .map(
                                         question =>
                                            <tr key={question.id}>
                                                <td><b>{question.username}</b></td>
                                                <td>{question.q_title}</td>
                                                <td>{question.q_text}</td>
                                                <td>
                                                    <Link to={`/view-question/${question.id}`} className="viewQLink">View</Link>
                                                </td>
                                            </tr>
                                    )
                                }
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default profile;
