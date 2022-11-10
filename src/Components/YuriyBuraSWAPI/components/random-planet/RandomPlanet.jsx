import { Component } from 'react';
import './RandomPlanet.scss';

import SwapiServices from '../../services/SwapiServices/SwapiServices';

export default class RandomPlanet extends Component {

  swapiService = new SwapiServices();


  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    }
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25)+2;
    this.swapiService.getPlanet(11)
    .then(planet => {
      this.setState({
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        id
      });
    });
  }

  render() {
    const {name, population, rotationPeriod, diameter, id} = this.state;
    return(
      <div className="Random-planet jumbotron rounded">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" className="planet-image" />
        <div>
          <h4>{name}</h4>
          <ul className="list-group-item">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diametr</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}