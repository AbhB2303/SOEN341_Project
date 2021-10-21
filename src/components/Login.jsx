import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div className="Login">
            <div className="h3">
                <h3>Login to Continue!</h3>
            </div>
            <form className="LoginForm">
                <input className= "email" type="email" placeholder="Enter your email"
                    name="email" id="email" required></input>
                <br /><br />
                <input className= "password" type="password" placeholder="Enter your password"
                    name="password" id="password" required></input>
                <br /><br />
                <input className="submit" type="submit" value="Submit" />
                <br />
                <p><strong>Forgot your password?</strong>  <a href="#"> click here!</a> </p>
            </form>
        </div>
        )
    }
}
export default Login;
