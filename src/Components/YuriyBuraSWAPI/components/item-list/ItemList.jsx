import { Component } from 'react';
import './ItemList.scss';

import Spiner from '../spinner/Spinner';

export default class ItemList extends Component {


  state = {
    itemList: null,
  }

  componentDidMount() {

    const {getData} = this.props;

    getData()
    .then((itemList) => {
      this.setState({
        itemList
      });
    });
  }

  rederItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.children(item);
      return (
        <li key={id} 
        className="list-group-item"
        onClick={()=> this.props.onItemSelected(id)}
        >{label}
        </li>
      )
    })
  }

  render() {
    const {itemList} = this.state;

    if(!itemList) {
      return <Spiner />
    }

    const items = this.rederItems(itemList);

    return(
      <ul className="ItemList list-group">
        {items}
      </ul>
    );
  }
  
}