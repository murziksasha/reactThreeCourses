import { Component } from 'react';

import './mainNepomnyashiy.css';

import Form from './components/Form/Form';
import MyTaskForm from './components/myTaskForm/MyTaskForm';
import Header from './components/projectFilms/layout/Header';
import Main from './components/projectFilms/layout/Main';
import Footer from './components/projectFilms/layout/Footer';

class Nepomnyashiy extends Component{



  render() {
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>

      {/* <Form/> */}
      {/* <MyTaskForm/> */}
    </>
    )

  }
}

export default Nepomnyashiy;