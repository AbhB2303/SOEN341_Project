import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import AskQuestionForm from './components/AskQuestionForm'
import ListQuestions from './components/ListQuestions'
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header></Header>
          <div className="container">
            <AskQuestionForm></AskQuestionForm>
            <Switch> http://localhost:3000/add-question
              <Route path="/" component={ListQuestions}></Route>
              <Route path="/questions" component={ListQuestions}></Route>
              <Route path="/add-question" component={AskQuestionForm}></Route>
              <ListQuestions></ListQuestions>
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </div>
    )
  }
}
export default App;
