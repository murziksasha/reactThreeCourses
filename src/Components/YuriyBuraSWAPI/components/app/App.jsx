import './App.scss';

import RandomPlanet from '../random-planet/RandomPlanet';
import Header from '../header/Header';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';

export default function App(){
  return (
    <div>
      <Header/>
      <RandomPlanet/>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList/>
        </div>
        <div className="col-md-6">
          <PersonDetails/>
        </div>
      </div>
    </div>
  )
}