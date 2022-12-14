import { useState, useEffect, useRef, useMemo, useContext } from 'react';
import './hooksPractice.scss';

import HookUseContext from './HookuseContext/HookUseContext';
import Alert from './HookuseContext/Alert';
import AlertProvider from './HookuseContext/AlertContext';

//nepomyashiy example useHookBasic
import useContextBasic from './useContextBasic/useContextBasic';
import Books from './useContextBasic/Books/Books';




function complexCompute(num){
  let i = 0;
  while(i< 100000000) i++;
  return num * 2;
}

function HooksPractice(props) {
  const[counter, setCounter] = useState(0);
  const [number, setNumber] = useState(84);
  const [colored, setColored] = useState(false);
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x:0, y: 0
  });
  const [value, setValue] = useState('initial');

  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');


  useEffect(()=>{
    prevValue.current = value;
  }, [value])

  useEffect(()=>{
    window.addEventListener('mousemove', e=>{
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    })
  }, []);

  useEffect(()=>{
    renderCount.current++;
    inputRef.current.focus();

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
    .then(json => setData(json))
  }, [type]);

  const add = () => {
    setCounter(counter=> counter + 1);
    setNumber(number => number + 1);

  }
  const remove = () => {
    setCounter(counter => counter - 1);
    setNumber(number => number - 1);
  }
  const reset = () => {
    setCounter(0);
  }

  const computed = useMemo(()=>complexCompute(number),[number]) ;

  return (
    <div className='container pt-5'>

    {/* nepomnyashiy hooks example:  */}
    <useContextBasic>
      <Books/>
    </useContextBasic>

    <br /><br /><br /> <hr />

    <AlertProvider>
      <Alert/>
      <HookUseContext toggleAlert={()=>{}}/>
    </AlertProvider>



      <h1>{type} and amount of renders is {renderCount.current}</h1>
      <h2>prev state value: {prevValue.current}</h2>
      <input type="text" 
      onChange={e => setValue(e.target.value)} 
      value={value} 
      ref={inputRef}
      />
      <button onClick={()=> setType('users')} className='btn btn-info'>USERS</button>
      <button onClick={()=> setType('todos')} className='btn btn-primary'>ToDos</button>
      <button onClick={()=> setType('posts')} className='btn btn-light'>Posts</button>
      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>
      <pre>
        {/* {JSON.stringify(data, null, 2)} */}
      </pre>


      <br /><br /><br />
      <hr />


      <h3>{counter}</h3>
      <h4>Computed hard number is {number}</h4>
      <h4>`Colored is {colored.toString()}`</h4>
      <button className='btn btn-success'
      onClick={add}
      >ADD</button>
      <button className='btn btn-danger'
      onClick={remove}
      >Remove</button>
      <button className='btn btn-warning'
      onClick={reset}>RESET</button>
      <button className='btn btn-secondary'
      onClick={()=>setColored(prev=> !prev)}
      >isColored</button>
    </div>
  );
}

export default HooksPractice;