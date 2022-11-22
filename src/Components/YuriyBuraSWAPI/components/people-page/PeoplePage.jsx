import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/ErrorIndicator';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';

import './peoplePage.scss';

class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if(this.state.hasError) {return <ErrorIndicator/>}
    return (
      <div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;