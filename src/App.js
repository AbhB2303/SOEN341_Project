import React, { Component } from 'react';
import './App.css';
import AskQuestionForm from './Components/AskQuestionForm'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AskQuestionForm></AskQuestionForm>
      </div>
    )
  }
}
export default App;
