import React, { Component } from 'react';
import UsersServices from '../Services/UsersServices';

class Register extends Component 
{
    constructor(props) 
    {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    
    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }
    
    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    
    saveUser = (u) => {
        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        
        UsersServices.registerUser(user).then((res) => {
            if(res.data==="fail")
            {
                alert("User already exist, log in please!");
                this.props.history.push("/login");
            } 
            else 
            {
                alert("User registered successfully!");
                UsersServices.createUser(user);
                localStorage.setItem("username", res.data);
                let a = localStorage.getItem("username");
                this.props.history.push(`/profile/${a}`);
            }
        });
    }
    
    render() 
    {
        return (
            <div className="Register">
            <div className="h3">
                <h3>Register to Continue!</h3>
            </div>
            <form className="RegisterForm">
                <input className= "username" type="text" placeholder="Enter your username"
                    name="username" id="username" 
                    value={this.state.username} 
                    onChange={this.changeUsernameHandler}
                    required/>
                <br /><br />
                <input className= "emailr" type="email" placeholder="Enter your email"
                    name="email" id="email" 
                    value={this.state.email} 
                    onChange={this.changeEmailHandler}
                    required/>
                <br /><br />
                <input className= "password" type="password" placeholder="Enter your password"
                    name="password" id="password"
                    value={this.state.password} 
                    onChange={this.changePasswordHandler}
                    required/>
                <br /><br />
                <input className="submit" type="submit" value="Submit" 
                disabled={this.state.username.length<1 || this.state.email.length<1 || this.state.password.length<1} 
                onClick={this.saveUser} />
                <br />
            </form>
        </div>
        )
    }
}
export default Register;
