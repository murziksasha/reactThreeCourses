import React from 'react';
import { Component } from 'react';
import  ReactDOM from 'react-dom';

import './mainPetrechenko.css';
import App from './components/app/app';



const Message = (props) => {
  return (
    <h2>the counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }
}

class Form extends Component {

 state = {
  advOpen: false,
 }

  componentDidMount() {
    setTimeout(this.handleClick, 3000);
  }

  setInputRef = elem => {
    this.myRef = elem;
  }

  focusFirstUI = () => {
    this.myRef.focus();
  }

  handleClick = () => {
    this.setState(({advOpen}) => (
      {advOpen: !advOpen}
    ) )
  }

  render() {
      return (
          <div>
              <form className="w-50 border mt-5 p-3 m-auto"
              style={{
                'position': 'relative',
                'overflow': 'hidden',
              }}
              onClick={this.handleClick}>
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                     />
                  </div>
                  <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                      <textarea 
                      onClick={this.focusFirstUI}
                      className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  {
                    this.state.advOpen ?                   
                  <Portal>
                      <Msg/>
                  </Portal> : null
                  }
              </form>
          </div>
      )
  }
}

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
}

const Msg = () => {
  return (
    <div
      style={{
        'width': 500,
        'height': 150,
        'backgroundColor': 'red',
        'position': 'absolute',
        'right': '0',
        'bottom': '0',
      }}>
        Hello
    </div>
  )
}

function MainPetrechenko () {

  return (
    <div>
  <Counter render = {counter => (
    <Message counter = {counter}/>
)}
/>

<Counter render = {counter => (
  <Message counter = {counter}/>
)}
  
/>
      <Form/>
    </div>


    // <App/>
  )
}

export default MainPetrechenko;