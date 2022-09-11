import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import data from "../../data/dataEmployees";


import './app.css';

class WhoAmI extends Component {

  _style = {
    marginTop : '25px',
    color: 'blue'
  }

  _spanStyle = {
    fontSize: '30px',
    color: 'red'
  }

  state = {
    years: 27,
    plus: "+++",
    minus: "---"
  }

  nextYear = () => {
    this.setState(state => ({years: state.years + 1}));
  }

  prevYear = () => {
    this.setState(state => ({years: state.years - 1}));
  }

  render() {
    return (
      <div style={this._style}>
      <h2>my name is {this.props.name}, surname is {this.props.surname}</h2>
      <p >age is <span style={this._spanStyle}>{this.state.years}</span></p>
      <button className='btn btn-success' type='button'
      onClick={() => this.nextYear(+1)}
      >{this.state.plus}</button>
      <button className='btn btn-primary' type='button'
      onClick={() => this.prevYear()}
      >{this.state.minus}</button>
      
      <a href="https://properservice.com.ua">proper service</a>
    </div>
    )
  }
}

function App() {
  return (
    <div className="app">
      <WhoAmI name = 'Sasha' surname = 'Grygoriev'/>
      <WhoAmI name = 'Petya' surname = 'Petrov'/>
        {/* <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/> */}
    </div>
  );
}

export default App;
