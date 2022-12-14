import React, { Component } from 'react';

import './Form.css';


class Form extends Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      email: '',
      message: '',
      select: '',
      subscription: false,
      gender: '',
    }
    this.firstNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.firstNameRef.current.focus();
  }
  


  onHandleChange = (e) => {
    this.setState(()=> ({[e.target.name]: e.target.value}), ()=>{
      if(this.state.firstname.length === 16){
        console.log(`it is must be a focus`)
        this.emailRef.current.focus();
      }
    })
  }

  onHandleCheckbox = (e) => {
    this.setState({subscription: e.target.checked})
  }

  // validateName = () => {
  //   if(this.state.firstname.length < 5) {
  //     alert(`Your first name can't be less than 7 letters `);
  //   }
  // }

  validateEmail = () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
    {
      alert(`email is not valid. Try again please!`);
    }
  }

  render() {
    const {firstname, email, message, select, subscription, gender} = this.state;

    return (
      <div>
      <input type='text'
      ref={this.firstNameRef}
        name="firstname"
        placeholder="firstname"
        value={firstname}
        onChange={this.onHandleChange}
        onBlur={this.validateName}/>

<input type='email'
        name="email"
        ref={this.emailRef}
        placeholder="email"
        value={email}
        onChange={this.onHandleChange}
        onBlur = {this.validateEmail}
        />
        <br /> <br /> <br />
        <textarea name="message" value={message}
        onChange={this.onHandleChange}></textarea>
        <br />
        <br />
        <select name="select" value={select}
        onChange={this.onHandleChange}>
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <br />
        <label>
        <input type="checkbox" name='subscription' checked={subscription} 
          onChange={this.onHandleCheckbox}/>
          Subscription
        </label>
        <br />
        <br />
        <input type="radio" name="gender" value='male' 
                onChange={this.onHandleChange}
                checked = {gender === 'male'}
                /> male
        <input type="radio" name="gender" value='female' 
                onChange={this.onHandleChange}
                checked = {gender === 'female'}
                /> female
      </div>
    )
  }

}

export default Form;