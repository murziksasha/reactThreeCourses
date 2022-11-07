import './activeQuiz.scss';

import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => {
  return (
    <div className="activeQuiz">
      <p className='question'>
        <span>
          <strong>1.</strong>&nbsp;
          {props.questions}
        </span>
        <small>
          {props.answerNumber} from {props.quizLength}
        </small>
      </p>

    <AnswersList
    answers = {props.answers}
    onAnswerClick = {props.onAnswerClick}
    />

    </div>
  )
}

export default ActiveQuiz;