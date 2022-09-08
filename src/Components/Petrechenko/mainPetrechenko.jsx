import {Component} from 'react';
import './mainPetrechenko.css';
import App from './components/app/app';

const WhoAmi = ({name, surname, link})=> {
  
  return (
    <div>
      <h1>My name is {name()}, surname - {surname}</h1>
      <a href={link} target='_blank'>Some Link</a>
    </div>
  )
}


function MainPetrechenko () {

  return (
    <div className='App'>
      <WhoAmi name = {() => 'Alexandr'} surname = 'Grygoriev' link = 'https://www.properservice.com.ua'/>
      <WhoAmi name = {() => 'Alexandr'} surname = 'Petrov' link = 'https://www.tenet.ua'/>
    </div>
    // <App/>
  )
}

export default MainPetrechenko;