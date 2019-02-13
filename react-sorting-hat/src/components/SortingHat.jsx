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
            {
                question: 'You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:',
                answers: [
                    {
                        answer:'Attempt to confuse the troll into letting all three of you pass without fighting?',
                        result: 'rr'
                    },
                    {
                        answer:'Suggest drawing lots to decide which of you will fight?',
                        result: 'hh'
                    },
                    {
                        answer:'Suggest that all three of you should fight (without telling the troll)?',
                        result:'ss'
                    },
                    {
                        answer:"Volunteer to fight?",
                        result:'gg'
                    }
                ]
            },
        ];

        this.state = {
            currentQuestion: this.questions[0].question,
            currentAnswers: this.questions[0].answers,
            result: '',
            questionNumber:1
        };
        
    }
    
    clicked = (answerRes) => {
        // if last quest 
        if(this.questions.length === this.state.questionNumber) {
            // calc the house
            const winningHouse = this.winningHouse();
            // clear the questions
            // display results 
            console.log(this.state.result);
            console.log(winningHouse);
        } else {
            this.updateQuestion(answerRes);
        }
        
        
    }

    // takes in the answer and updates to new question and answers
    updateQuestion = (answerRes) => {
        this.setState( state => ({
            result: state.result + answerRes,
            questionNumber: state.questionNumber+1,
            currentQuestion: this.questions[state.questionNumber].question,
            currentAnswers: this.questions[state.questionNumber].answers,
        }))
    }

    // counts the total score for each house and returns a string of the winning house
    winningHouse = () => {
        const numR = this.howManyMatch(this.state.result, "r");
        const numH = this.howManyMatch(this.state.result, "h");
        const numS = this.howManyMatch(this.state.result, "s");
        const numG = this.howManyMatch(this.state.result, "g");
        if((numR >= numH)&&(numR>=numS)&&(numR>=numG)) {
            return 'Ravenclaw';
        }else if((numH >= numR)&&(numH>=numS)&&(numH>=numG)){
            return 'Hufflepuff';
        }else if((numS >= numR)&&(numS>=numH)&&(numS>=numG)){
            return 'Slytherin';
        }else {
            return 'Gryffindor';
        }
    }
    // counts the number of matching strings in a string and returns how many matches
    howManyMatch(stringToSearch, string) {
        const regex = new RegExp(string,"g");
        return (stringToSearch.match(regex) || []).length;
    }

    render() {
        return (
            <div className="sorting-container">
                <h2 className="sorting-header">Take This Quiz</h2>
                <Question question={this.state.currentQuestion} />
                {
                    this.state.currentAnswers.map((answer, index) =><button onClick={() =>this.clicked(answer.result)} key={index}>{answer.answer}</button>)
                }
            </div>
        )
        
    }

}