import { Component } from 'react';
import './Header.scss';

export default class App extends Component {
  render() {
    return(
      <div className='Header d-flex'>
        <h3>
          <a href="#!">Star DB</a>
        </h3>
        <ul d-flex>
          <li><a href="#!">People</a></li>
          <li><a href="#!">Planets</a></li>
          <li><a href="#!">Starships</a></li>
        </ul>
      </div>
    )
  }
}