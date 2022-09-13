import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import data from "../../data/dataEmployees";

import "./app.css";

class App extends Component {
  
  _maxId = 'abc';
  _maxIdNum = 5;


  state = {
    data: [...data],
  };


  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id),
      }
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this._maxIdNum++ + this._maxId,
    }

    this.setState(({data}) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      }
    })
  }

  onToggleProp = (id, prop) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

    //   return {
    //     data: newArr
    //   }
    // })
    //         ------------------  Next Variant --------------
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }));
  }


  render() {
  const counterRise = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo countWorkers = {this.state.data.length}
                counterRise = {counterRise}/>

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp = {this.onToggleProp}
        />
        <EmployeesAddForm 
                  onAdd = {this.addItem}
                  />
      </div>
    );
  }
}

export default App;
