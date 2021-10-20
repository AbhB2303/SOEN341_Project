import React, { Component } from 'react';

class MenuBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                    <div className="navbar-brand">Ask Away</div>
                        <ul className="navbar-nav">
                            <li className = "nav-link">Home</li>
                            <li className = "nav-link">Questions Forum</li>
                            <li className = "nav-link">Profile Page</li>
                            <li className = "nav-link">About</li>
                            <li className = "nav-link">Content</li>
                        </ul>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li  className = "nav-link">Login</li>
                            <li  className = "nav-link">Logout</li>
                        </ul>
                
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;