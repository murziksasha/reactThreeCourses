import { useState } from 'react';

function HookUseState() {
  const [color, setColor] = useState('white');
  const [fontSize, setFontSize] = useState(20);
  return (
    <div style={{ padding: '10px', backgroundColor: color, fontSize: fontSize }}>
      <h3 style={{ color: 'grey' }}>Hi from Hook use State</h3>
      <button
        onClick={() => {
          setColor('black');
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          setColor('white');
        }}
      >
        Light
      </button>
      <button
      onClick={()=>setFontSize((prev)=>prev+2)}
      >Size +</button>
            <button
      onClick={()=>setFontSize((prev)=>prev-2)}
      >Size -</button>
    </div>
  );
}

export default HookUseState;
