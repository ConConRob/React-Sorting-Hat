import React from 'react';
import Question from './Question';
export default class SortingHat extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [
            {
                question: 'Dawn or Dusk?',
                answers: ['Dawn', 'Dusk']
            }
        ];

        this.state = {
            currentQuestion: this.questions[0].question,
            currentAnswers: this.questions[0].answers
        };
        
    }

    render() {
        return (
            <div className="sorting-container">
                <h2 className="sorting-header">Take This Quiz</h2>
                <Question question={this.state.currentQuestion} />
                {
                    this.state.currentAnswers.map(answer =><button key={Date.now()}>{answer}</button>)
                }
            </div>
        )
        
    }

}