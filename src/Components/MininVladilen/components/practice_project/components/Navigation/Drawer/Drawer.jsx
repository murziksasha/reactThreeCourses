import React, { Component } from 'react';
import './drawer.scss';

import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
  1, 2, 3
]

export default class Drawer extends Component{
  renderLinks() {
    return links.map((item, i) => {
      return (<li key={i}>
       <a href="!#"> Link {item}</a>
      </li>
      )
    })
  }
  render(){
    const clazz = [
      'drawer',
    ]
    if(this.props.isOpen){
      clazz.push('open')
    }else {
      clazz.push('close')
    }
    return (
      <React.Fragment>
        <nav className={clazz.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
      </React.Fragment>
    )  
  }
}