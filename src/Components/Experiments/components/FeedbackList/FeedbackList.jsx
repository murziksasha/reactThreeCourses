import './feedbackList.scss';
import FeedbackItem from '../feedbackItem/FeedbackItem';
import Card from '../card/Card';

function FeedbackList({data}) {
  if(!data || data.length === 0) {
    return <p>No Feedback Yet</p>
  }
  
  return(
    <div className='feedback-list'>
      {data.map((item)=>{
        return (
          <>
          <FeedbackItem
          key={item.id}
          ratings={item.rating}
          texts = {item.text}
          />
          </>
        );
      })}
    </div>
  )
}

export default FeedbackList;