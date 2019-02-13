import React from 'react';
import Question from './Question';
export default class SortingHat extends React.Component {
    constructor(props) {
        super(props);
        this.questions = [
            {
                question: 'Dawn or Dusk?',
                answers: [
                    {
                        answer: 'Dawn',
                        result: 'gr',
                    },
                    {
                        answer: 'Dusk',
                        result: 'hs',
                    }
                ]  
            },
            {
                question: 'Four boxes are placed before you. Which would you try and open?',
                answers: [
                    {
                        answer:'The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.',
                        result: 'hh'
                    },
                    {
                        answer:'The gleaming jet black box with a silver lock and key, marked with a mysterious rune that you know to be the mark of Merlin.',
                        result: 'ss'
                    },
                    {
                        answer:'The ornate golden casket, standing on clawed feet, whose inscription warns that both secret knowledge and unbearable temptation lie within.',
                        result:'rr'
                    },
                    {
                        answer:"The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the worthy.’",
                        result:'gg'
                    }
                ]
            },
        ];

        this.state = {
            currentQuestion: this.questions[0].question,
            currentAnswers: this.questions[0].answers
        };
        
    }
    
    clicked = () => {
        this.setState({
            currentQuestion: this.questions[1].question,
            currentAnswers: this.questions[1].answers
        })
    }

    render() {
        return (
            <div className="sorting-container">
                <h2 className="sorting-header">Take This Quiz</h2>
                <Question question={this.state.currentQuestion} />
                {
                    this.state.currentAnswers.map((answer, index) =><button onClick={this.clicked} key={index}>{answer.answer}</button>)
                }
            </div>
        )
        
    }

}