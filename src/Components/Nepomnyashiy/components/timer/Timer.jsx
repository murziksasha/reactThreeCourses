import { useState, useEffect, useRef } from 'react';

function setDefaultValue() {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}

function Timer() {
  let [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCounting] = useState(false);

  const timerIdRef = useRef(null);

  const handleStart = () => {
    setIsCounting(true);
    timerIdRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIdRef.current);
    setIsCounting(false);
  };

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  };

  useEffect(() => {
    localStorage.setItem('count', count);
    return () => {
      clearInterval(timerIdRef.current);
    }
  }, [count]);

  return (
    <div className="Nepomnyashiy">
      <h1>React Number</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
