import { Component } from 'react';

import './App.scss';

import RandomPlanet from '../random-planet/RandomPlanet';
import Header from '../header/Header';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import PeoplePage from '../people-page/PeoplePage';

class App extends Component{


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <RandomPlanet/>
        <PeoplePage/>
      </div>
    )
  }
}

export default App;

