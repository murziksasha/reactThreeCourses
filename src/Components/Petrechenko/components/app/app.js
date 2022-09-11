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
    minus: "---",
    position: '',
  }

  changeYear = (num) => {
    this.setState(state => ({years: state.years + num}));
  }

  changeInput = (e) => {
    this.setState({position: e.target.value});
  }

  render() {
    const {name, surname} = this.props;
    const {years, position, plus, minus} = this.state;
    return (
      <div style={this._style}>
      <h2>my name is {name}, surname is {surname}, position is {position}</h2>
      <p >age is <span style={this._spanStyle}>{years}</span></p>
      <button className='btn btn-success' type='button'
      onClick={() => this.changeYear(+1)}
      >{plus}</button>
      <button className='btn btn-primary' type='button'
      onClick={() => this.changeYear(-1)}
      >{minus}</button>
      
      <a href="https://properservice.com.ua">proper service</a>

      <form>
        <span>enter your position</span>
        <input type="text" onChange={(e)=>this.changeInput(e)} />
      </form>
    </div>
    )
  }
}

function App() {
  return (
    <div className="app">
      {/* <WhoAmI name = 'Sasha' surname = 'Grygoriev'/>
      <WhoAmI name = 'Petya' surname = 'Petrov'/> */}
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
