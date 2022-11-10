import { Component } from 'react';

import './layaout.scss';

import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';


class Layaout extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }


  render() {
    return (
      <div>
        <Drawer
          isOpen = {this.state.menu}
          onClose = {this.menuCloseHandler}
        />
        <MenuToggle
        onToggle={this.toggleMenuHandler}
        isOpen = {this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layaout;