import React from 'react';
import {useAlertToggle} from './AlertContext';

 
function HookUseContext(props) {
  const toggle = useAlertToggle();
  return (
    <div className='container'>
      <h2>Hello from example context Hook</h2>
      <button className='btn btn-success'
      onClick={()=> toggle()}
      >Show the Alert</button>
    </div>
  );
}

export default HookUseContext;