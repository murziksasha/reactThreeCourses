import { Component } from 'react';

import './layaout.scss';


class Layaout extends Component {
  render() {
    return (
      <div>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layaout;