import { Component } from 'react';
import './RandomPlanet.scss';


import SwapiServices from '../../services/SwapiServices/SwapiServices';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

export default class RandomPlanet extends Component {

  swapiService = new SwapiServices();


  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    }
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = (err)=> {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25)+2;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  }

  render() {
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;
    const errorBlock = error ? <ErrorIndicator/> : null;

    return(
      <div className="Random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorBlock}
      </div>
    )
  }
}

const PlanetView = ({planet})=> {
  const {name, population, rotationPeriod, diameter, id} = planet;
  return (
    <>
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
    </>
  )
}