import React, { Component } from 'react';
import UsersServices from '../Services/UsersServices';
class Login extends Component {
    constructor(props) {
        super(props);
               
        this.state = {
            username: '',
            password: ''
        }
        this.logInTheUser = this.logInTheUser.bind(this);
        this.logOutTheUser = this.logOutTheUser.bind(this);
        this.changeUserHandler = this.changeUserHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    changeUserHandler=(event) => {
        this.setState({username: event.target.value});
    }
    changePasswordHandler=(event) => {
        this.setState({password: event.target.value});
    }

    logInTheUser=() => {
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        UsersServices.loginUser(user).then((res) => {
            if(res.data==="fail"){
                alert("Wrong username or password");
                window.location.reload();
            } else {
                localStorage.setItem("username", res.data);
                alert("Log in succesful!");
                this.props.history.push('/');
            }
        
        });

    }
    
    logOutTheUser =() => {
        localStorage.setItem("username", "");
        alert("You have been logged out!");
        this.props.history.push('/');
    }

    render() {
        let a = localStorage.getItem("username");
        if(a){
            return(
                <div className="Login"> You are already logged in. 
                <div> <input className="submit" type="submit" value="Log Out" onClick={this.logOutTheUser} /> </div>
                </div>
            )
        }
        return (

            
            
            <div className="Login">
            <div className="h3">
                <h3>Login to Continue!</h3>
            </div>
            
            <form className="LoginForm">
                <input className= "username" placeholder="Enter your username" value={this.state.username} onChange={this.changeUserHandler}
                    name="username" id="username" required></input>
                <br /><br />
                <input className= "password" type="password" placeholder="Enter your password" value={this.state.password} onChange={this.changePasswordHandler}
                    name="password" id="password" required></input>
                <br /><br />
                <input className="submit" type="submit" value="Submit" onClick={this.logInTheUser} />
                <br />
                <p><strong>Forgot your password?</strong>  <a href="#"> click here!</a> </p>
            </form>
        </div>
        )
    }
}
export default Login;
