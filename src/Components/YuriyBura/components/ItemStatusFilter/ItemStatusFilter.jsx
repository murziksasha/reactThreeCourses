import { Component } from 'react';

import './itemStatusFilter.css';

class itemStatusFilter extends Component {

  render () {
    return (
      <div className='btn-group'>
        <button type='button'
                className='btn btn-info'>All</button>
        <button type='button'
                className='btn btn-outline-secondary'>Active</button>
        <button type='button'
                className='btn btn-outline-secondary'>Done</button>
      </div>
    )
  }
}

export default itemStatusFilter;

