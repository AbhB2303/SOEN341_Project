import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ViewQuestion from './components/ViewQuestion'
import Index from './components/Index'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <NavBar></NavBar>
          <div className="container">
            <Switch> http://localhost:3000
              <Route path="/" exact component={Index}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/view-question/:id" component={ViewQuestion}></Route>
              <Route path= "/aboutus" component={AboutUs}></Route>
              <Route path= "/contactus" component={ContactUs}></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}
export default App;
