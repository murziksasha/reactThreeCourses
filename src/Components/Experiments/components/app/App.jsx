import { useState } from "react";

import FeedbackList from "../FeedbackList/FeedbackList";

import FeedbackData from '../../data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return(
    <div>
      <h1>Experiments Mode Components</h1>
        <FeedbackList data = {feedback}/>
    </div>
  )
}

export default App;