import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Footer from '.footer'
import AskQuestionForm from './components/AskQuestionForm'
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

const App =()=>{
  return (
    <div className="App">
      <Footer/>
    </div>
  )
}
export default App; 