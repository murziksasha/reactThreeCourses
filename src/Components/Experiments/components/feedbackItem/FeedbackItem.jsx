import './feedback.scss';

import {useState} from 'react';
import Card from '../card/Card';

function FeedbackItem ({ratings, texts}) {

  const [rating, setRating] = useState(ratings);
  const [text, setText] = useState(texts);

  const handleClick = () => {
    setRating((rating) => rating+1);
    
  }

  return(
    <div className="card">
      <Card text={text}
            rating={rating}
            handleClick= {handleClick}/>
    </div>
  )
}

export default FeedbackItem;