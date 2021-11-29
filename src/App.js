import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import ViewQuestion from './Components/ViewQuestion'
import Index from './Components/Index'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
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
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}
export default App;
