import { Component } from 'react';

import './App.scss';

import RandomPlanet from '../random-planet/RandomPlanet';
import Header from '../header/Header';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import PeoplePage from '../people-page/PeoplePage';
import SwapiServices from '../../services/SwapiServices/SwapiServices';

import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

const swapiService = new SwapiServices();

class App extends Component{


  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    return (
      <div>
        <SwapiServiceProvider value={this.swapiService}>
          <Header/>
          <RandomPlanet/>
          <PeoplePage/>
        </SwapiServiceProvider>
      </div>
    )
  }
}

export default App;

