import './answersList.scss';

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => {
  return (
    <ul className='answersList'>
      { props.answers.map((item, i) => {
       return(
        <AnswerItem key = {i}
        state = {props.state ? props.state[item.id] : null}
        answer={item}
        onAnswerClick = {props.onAnswerClick}
        />
       ) 
      })}
    </ul>
  )
}

export default AnswersList;