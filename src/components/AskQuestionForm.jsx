import React, { Component } from 'react';
class AskQuestionForm extends Component {
    submittionAlert() {
        alert('Your question was posted successfully!');
    }
    	cancellationAlert() {
        alert('Your question was cancelled successfully!');
    }
    render() {
        return (
            <div className="box">
                <div className="h3">
                    <h3>Post a New Question!</h3>
                </div>
                <form className="form">
                    <input className="title" type="text" placeholder="Enter the title of your question"
                        name="q_title" id="q_title" required></input>
                    <br /><br />
                    <input className="question" type="text" placeholder="Enter your question"
                        name="q_text" id="q_text" required></input>
                    <br /><br />
                    <input className="submit" type="submit" value="Submit" onClick={this.submittionAlert} />
                    <button className="reset" type="reset">Reset</button>
                    <br />
         	     	<input className="submit" type="submit" value="Cancel" onClick={this.cancellationAlert} />
                    <br />
                </form>
                <form action="/action_page.php">
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default AskQuestionForm;
