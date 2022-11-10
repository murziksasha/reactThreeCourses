import { Component } from 'react';
import './ItemList.scss';

export default class ItemList extends Component {
  render() {
    return(
      <ul className="ItemList list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">Darth Vader</li>
        <li className="list-group-item">R2-D2</li>
      </ul>
    );
  }
  
}