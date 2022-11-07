import './answerItem.scss';

const AnswerItem = props => {
  return (
    <li className='answerItem'
    onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;