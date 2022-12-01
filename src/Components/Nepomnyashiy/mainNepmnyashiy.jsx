import { useState, useEffect } from 'react';

import './mainNepomnyashiy.css';

import Timer from './components/timer/Timer';


import Form from './components/Form/Form';
import MyTaskForm from './components/myTaskForm/MyTaskForm';
import Header from './components/projectFilms/layout/Header';
import Main from './components/projectFilms/layout/Main';
import Footer from './components/projectFilms/layout/Footer';

function Nepomnyashiy() {

const [isClicker, setClicker] = useState(false);
    return(
    <div >
      <Header/>
      <Main/>
      <Footer/> 

      <Form/>
      <MyTaskForm/>

      <Timer/>
     
    </div>
    )
}

export default Nepomnyashiy;