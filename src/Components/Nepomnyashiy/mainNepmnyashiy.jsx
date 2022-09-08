import { Component } from 'react';

import './mainNepomnyashiy.css';
import Book from "./book";

class Nepomnyashiy extends Component{
   cssStyle = {
    color: 'red',
    marginLeft: '20px'
  }


    state = {
      count : 10,
      someKey: false
    }
  

  handleClick = (numb) => {
    // this.setState({
    //   count: this.state.count + numb
    // })
    this.setState((prevState) => ({count: prevState.count + numb}));

  }


  render() {
    return(
      <div>
        <span>{this.state.count}</span>
        <button 
        style={this.cssStyle}
        onClick={()=>this.handleClick(1)}>
          +</button>
          <button 
        style={this.cssStyle}
        onClick={()=>this.handleClick(-1)}>-</button>
      <Book name = "JS for Beginners" year = "2020" price= "1000"/>
      <Book name = "React for Beginners" year = "2021" price= "1200"/>
      <Book name = "Vue for Beginners" year = "2022" price= "1500"/>
    </div>
    )

  }
}

export default Nepomnyashiy;