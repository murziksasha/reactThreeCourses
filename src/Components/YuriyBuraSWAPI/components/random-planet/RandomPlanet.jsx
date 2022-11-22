import { Component } from 'react';
import './RandomPlanet.scss';


import SwapiServices from '../../services/SwapiServices/SwapiServices';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

export default class RandomPlanet extends Component {

  swapiService = new SwapiServices();


  constructor() {
    super();
    console.log('CONSTRUCTOR');
    this.state = {
      planet: {},
      loading: true,
      error: false,
      toggle: true,
    }

  }

  componentDidMount() {
    console.log('didMounted')
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 20000);
  }

  componentDidUpdate() {
    console.log('Didupdated');
  }

  componentWillUnmount() {
    console.log(`UNMOUNT`);
    clearInterval(this.interval);
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

  updatePlanet = ()=> {
    console.log('update planet');
    const id = Math.floor(Math.random()*25)+3;
    this.swapiService.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  }

  handleToggle = () => {
    this.setState(({toggle}) => ({
      toggle: !toggle,
    }))
  }

  render() {
    console.log(`RENDER`);
    const {planet, loading, error, toggle} = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner/> : null;
    const content = hasData && toggle ? <PlanetView planet={planet}/> : null;
    const errorBlock = error ? <ErrorIndicator/> : null;

    return(
      <div className="Random-planet jumbotron rounded">
        <button className='btn btn-danger'
        onClick={this.handleToggle}
        >TOGGLE planet</button>
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