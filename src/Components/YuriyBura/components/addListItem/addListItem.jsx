import { Component } from 'react';

import './addListItem.css';

class AddListItem extends Component {

  state = {
    label: '',
  }

  onLabelchange = (e) => {
    this.setState({
      label: e.currentTarget.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.label){
      this.props.onItemAdd(this.state.label);
      this.setState({
        label: ''
      })
    };
    return;

  }
  


  render(){    
  return (
    <form className='item-add-from d-flex'
    onSubmit={this.onSubmit}>
      <input type="text"
      className='add-control'
      placeholder='What needs to be done?'
      value={this.state.label} 
      onChange={this.onLabelchange}/>
      <button 
      className='btn btn-outline-secondary'
      >Add Item</button>
    </form>
  )

  }

}

export default AddListItem ;