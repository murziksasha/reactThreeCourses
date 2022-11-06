import { Component } from 'react';


import './MyTaskForm.css'



class MyTaskForm extends Component {

  state= {
    email: '',
    checkbox: false,
  }

  onHandleChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  onChangeCheckbox = (e) => {
    this.setState({
      checkbox: e.target.checked
    })
  }

  validateHandle = () => {
     const isValidateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email.toLowerCase());

     const isValidateCheckbox = this.state.checkbox;

     if(!isValidateEmail) {
      alert('Your mail is not valid')
      return
     }

     if(!isValidateCheckbox) {
      alert('You should accept all terms and conditions')
      return
     }

     this.setState({
      email: '',
      checkbox: false,
     })

     alert('Thank you for subscription!')
  }


  submit = (e) =>{
    e.preventDefault();
  }

  render() {
    const {email, checkbox} = this.state;
    return(
      <div>
        <form className='myForm'
        onSubmit={this.submit}>
          <input type="email" placeholder='email' name='email' value={email}
          onChange = {this.onHandleChange}/>
          <br/>
          <br/>
          <label>
            <input type="checkbox" checked = {checkbox}
            onChange={this.onChangeCheckbox}/>
            I agree with terms and conditions
          </label>
          <br/>
          <input type='button'
          onClick={this.validateHandle} value="SEND"/>
        </form>
      </div>

    )
  }
}

export default MyTaskForm;