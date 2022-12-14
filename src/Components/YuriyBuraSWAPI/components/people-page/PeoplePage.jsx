import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/ErrorIndicator';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import SwapiServices from '../../services/SwapiServices/SwapiServices';

import './peoplePage.scss';

const Row = ({left, right}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
}

class ErrorBoundry extends Component{
  state = {
    hasError: false,
  }

  componentDidCatch = () => {
    this.setState({
      hasError: true,
    })
  }

  render(){
    if(this.state.hasError){
      return `Some thing wrong!!!...`;
    }
    return(

      this.props.children
    )
  }
}

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



  itemList = (
    <ItemList onItemSelected = {this.onPersonSelected}
    getData={this.swapiService.getAllPeople}>
    {(i)=> `${i.name}, ${i.birthYear})` }
    </ItemList>
  );

  render() {
    if(this.state.hasError) {return <ErrorIndicator/>}
    return (
      <ErrorBoundry>
        <Row left={
        <ItemList onItemSelected = {this.onPersonSelected}
        getData={this.swapiService.getAllPlanets}/>
        } right={<ItemList onItemSelected = {this.onPersonSelected}
        getData={this.swapiService.getAllStarships}
        />} />
      </ErrorBoundry>
      // <div>
      //       {this.itemList}
      //     </div>
      //     <div className="col-md-6">
      //       <PersonDetails personId = {this.state.selectedItem}/>
      //     </div>
      //   </div>

      //   <div className="row mb2">
      //     <div className="col-md-6">

      //     </div>
      //     <div className="col-md-6">
      //       <PersonDetails personId = {this.state.selectedItem}/>
      //     </div>
      //   </div>

      //   <div className="row mb2">
      //     <div className="col-md-6">

      //     </div>
      //     <div className="col-md-6">
      //       <PersonDetails personId = {this.state.selectedItem}/>
      // </div>
    );
  }
}

export default PeoplePage;