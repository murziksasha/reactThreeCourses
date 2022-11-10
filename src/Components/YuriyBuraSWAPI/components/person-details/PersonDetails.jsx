import { Component } from 'react';
import './PersonDetails.scss';

export default class PersonDetails extends Component {
  render() {
    return (
      <div className='PersonDetails card'>
        <img src="https://starwars-visualguide.com/assets/img/" alt="" className="person-image" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}