import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/ErrorIndicator';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiServices from '../../services/SwapiServices/SwapiServices';

import './peoplePage.scss';

class PeoplePage extends Component {

  swapiService = new SwapiServices();

  state = {
    selectedItem: null,
    hasError: false,
  }

  onPersonSelected = (selectedItem) => {
    this.setState({
      selectedItem
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
            <ItemList onItemSelected = {this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({name, gender, birthYear})=> `${name} (${gender}, ${birthYear})` }
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedItem}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={(item)=> item.name }
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedItem}/>
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={(item)=> item.name }
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;