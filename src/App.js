import React, { Component } from 'react';
import './App.css';
import AskQuestionForm from './components/AskQuestionForm'
import MenuBar from './components/MenuBar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar></MenuBar>
        <AskQuestionForm></AskQuestionForm>
      </div>
    )
  }
}
export default App;
