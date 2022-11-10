import { Component } from 'react';

import './quiz.scss';

import ActiveQuiz from '../../ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Black', id:1},
          {text: 'Blue', id:2},
          {text: 'Red', id:3},
          {text: 'Green', id:4},
        ]
      },
      {
        question: 'What is the shape of SUN?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'oval', id:1},
          {text: 'square', id:2},
          {text: 'round', id:3},
          {text: 'rectangle', id:4},
        ]
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {

    if(this.state.answerState){
      const key = Object.keys(this.state.answerState);
      if(this.state.answerState[key] === 'success'){
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if(!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {          
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000)

    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  render() {
    return (
      <div className='quiz'>
        <div className='quiz__wrapper'>
        <h2>Answer all questions:</h2>

          {
            this.state.isFinished 
            ? <FinishedQuiz
                results = {this.state.results}
                quiz = {this.state.quiz}
                onRetry = {this.retryHandler}
              />
            : <ActiveQuiz
                questions={this.state.quiz[this.state.activeQuestion].question}
                answers={this.state.quiz[this.state.activeQuestion].answers}
                onAnswerClick = {this.onAnswerClickHandler}
                quizLength = {this.state.quiz.length}
                answerNumber = {this.state.activeQuestion + 1}
                state = {this.state.answerState}
              />
          }


        </div>
      </div>
    )
  }
}

export default Quiz;