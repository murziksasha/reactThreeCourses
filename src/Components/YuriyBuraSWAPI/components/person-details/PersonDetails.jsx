import { Component } from 'react';
import './PersonDetails.scss';

import { SwapiServiceConsumer } from '../swapi-service-context/swapi-service-context';

import SwapiServices from '../../services/SwapiServices/SwapiServices';
import Spinner from '../spinner/Spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiServices();

  state = {
    person: null,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId){
      this.updatePerson();
    }
  }

  updatePerson() {
    this.setState({
      person: null,
    })
    const {personId} = this.props;
    if(!personId) {
      return;
    }

    this.swapiService
    .getPerson(personId)
    .then((person) => {
      this.setState({person});
    })
  }

  render() {

    if(!this.state.person) {
      return (
        <>
        <h3>Please select the character</h3>
          <Spinner/>
        </>
      )
    }

    const {person: {
      id, name, gender, birthYear, eyeColor
    } } = this.state;
    return (
      <div className='PersonDetails card'>
        <SwapiServiceConsumer>
          {
            (swapiService) => {
              return  (
                personalInfo(id, name, gender, birthYear, eyeColor)
              )
            }
          }
        </SwapiServiceConsumer>
      </div>
    )
  }
}

const personalInfo = (id, name, gender, birthYear, eyeColor) => {
  return (
    <>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name} className="person-image" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  )
}