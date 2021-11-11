import React, { Component } from 'react';
class Register extends Component {
    render() {
        return (
            <div className="Register">
            <div className="h3">
                <h3>Register to Continue!</h3>
            </div>
            <form className="RegisterForm">
                <input className= "username" type="username" placeholder="Enter your username"
                    name="username" id="username" required></input>
                <br /><br />
                <input className= "emailr" type="email" placeholder="Enter your email"
                    name="email" id="email" required></input>
                <br /><br />
                <input className= "password" type="password" placeholder="Enter your password"
                    name="password" id="password" required></input>
                <br /><br />
                <input className="submit" type="submit" value="Submit" onClick={this.submittionAlert} />
                <br />
            </form>
        </div>
        )
    }
}
export default Register;
