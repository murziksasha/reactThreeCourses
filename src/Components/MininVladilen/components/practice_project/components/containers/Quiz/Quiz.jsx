import { Component } from 'react';

import './quiz.scss';

import ActiveQuiz from '../../ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id:1},
          {text: 'Синий', id:2},
          {text: 'Красный', id:3},
          {text: 'Зеленый', id:4},
        ]
      },
      {
        question: 'What color is the shape of SUN?',
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
    console.log('Answer Id: ', answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion +1
    })
  }

  render() {
    return (
      <div className='quiz'>
        <div className='quiz__wrapper'>
        <h2>Answer all questions:</h2>
          <ActiveQuiz
            questions={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick = {this.onAnswerClickHandler}
            quizLength = {this.state.quiz.length}
            answerNumber = {this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;