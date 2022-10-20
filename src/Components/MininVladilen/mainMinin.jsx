import { Component } from 'react';

import './mainMinin.css';

import Car from './components/Car/Car';


class Minin extends Component {

  state = {
    cars: [
      {name: 'ford', year: '1944'},
      {name: 'lance', year: '2002'}
    ],
    pageTitle: 'React Components'

  };

  onHandleTitle (newTitle){
    this.setState({
      pageTitle: newTitle,
    })
  }



  render() {
    const {cars, pageTitle} = this.state;
    return(
    <div>
      <h1>{pageTitle}</h1> <br /> <br />
      <button onClick={this.onHandleTitle.bind(this, 'my main React title')}>Change Title</button>
      <br /><br /><br />
      <Car 
      name={cars[0].name} 
      year = {cars[0].year}
      handleClick = {this.onHandleTitle.bind(this, 'ford title')}/>
      <br /><br /><br />
      <Car 
      name={cars[1].name} 
      year = {cars[1].year}
      handleClick = {this.onHandleTitle.bind(this, 'lande car title')}/>
    </div>
    )
  }
}

export default Minin;