import React, { Component } from 'react';
import AskQuestionForm from './AskQuestionForm'
import ListQuestions from './ListQuestions'

class Index extends Component 
{
    render() 
    {
        return (
            <div>
                <AskQuestionForm></AskQuestionForm>
                <ListQuestions></ListQuestions>
            </div>
        
        );
    }
}

export default Index;
