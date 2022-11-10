import './finished.scss';

import Button from '../UI/Button/Button';

const FinishedQuiz = props => {

  const successCount = Object.keys(props.results).reduce((total, current)=>{
    if(props.results[current] === 'success'){
      total++;
    }
    return total;
  }, 0)

  return (
    <div className="finishedQuiz">
      <ul>
        {props.quiz.map((item, i)=> {
            const cls = [
              'fa',
              props.results[item.id] === 'error' ? 'fa-times error' : 'fa-check success',
            ]
          return (
            <li key={i}>
              <strong>{i+1} </strong>. &nbsp;
              {item.question}
              <i className={cls.join(' ')}></i>
            </li>
          )
        })}
      </ul>

      <p>Right answers {successCount} of {props.quiz.length}</p>
      <div style={{marginBottom: 10}}>
        <Button
          onClick={props.onRetry}
          className='primary'
        >REpeat</Button>
        <Button
          className='success'
        >Go to Quiz list</Button>
      </div>
    </div>
  )
}

export default FinishedQuiz;