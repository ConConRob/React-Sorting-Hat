import React from 'react';
import Question from './Question';
import questions from '../questions/questions';
import './SortingHat.css';
export default class SortingHat extends React.Component {
    constructor(props) {
        super(props);
        this.questions =  questions()

        this.state = {
            currentQuestion: this.questions[0].question,
            currentAnswers: this.questions[0].answers,
            result: '',
            questionNumber:1,
            displayQuestion: '',
            currentTitle: 'Take This Quiz'
        };
        
    }
    
    clicked = (answerRes) => {
        // if last question
        if(this.questions.length === this.state.questionNumber) {
            // calc the house
            const winningHouse = this.winningHouse();
            // clear the questions
            this.hideQuestion();
            // display results 
            this.showResult(winningHouse);
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

    // hide the question 
    hideQuestion(){
        this.setState({displayQuestion:'sorting-question-hidden'})
    }
    
    // show the results of the test 
    showResult(result){
        this.setState({ currentTitle: result });
    }

    render() {
        return (
            <div className="sorting-container">
                <h2 className="sorting-header">{this.state.currentTitle}</h2>
                <div className={`question-container ${this.state.displayQuestion}`}>
                    <Question question={this.state.currentQuestion} />
                    {
                        this.state.currentAnswers.map((answer, index) =><button onClick={() =>this.clicked(answer.result)} key={index}>{answer.answer}</button>)
                    }                
                </div>

            </div>
        )
        
    }

}