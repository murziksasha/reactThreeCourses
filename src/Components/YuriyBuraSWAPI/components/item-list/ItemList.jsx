import { Component } from 'react';
import './ItemList.scss';

import SwapiServices from '../../services/SwapiServices/SwapiServices';
import Spiner from '../spinner/Spinner';

export default class ItemList extends Component {

  swapiService = new SwapiServices();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
    .getAllPeople()
    .then((peopleList) => {
      this.setState({
        peopleList
      });
    });
  }

  rederItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li key={id} 
        className="list-group-item"
        onClick={()=> this.props.onItemSelected(id)}
        >{name}</li>
      )
    })
  }

  render() {
    const {peopleList} = this.state;

    if(!peopleList) {
      return <Spiner />
    }

    const items = this.rederItems(peopleList);

    return(
      <ul className="ItemList list-group">
        {items}
      </ul>
    );
  }
  
}