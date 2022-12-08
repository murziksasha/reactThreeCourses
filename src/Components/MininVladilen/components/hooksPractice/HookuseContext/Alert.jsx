import React from 'react';
import { useAlert } from './AlertContext';

function Alert(props) {
  const alert = useAlert();

  if(!alert) return null;

  return (
    <div className='alert alert-danger' style={{marginTop: 30}}>
      <p style={{color: 'yellow', fontSize: 20}}>this is very important message!!!...</p>
    </div>
  );
}

export default Alert;