import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import data from "../../data/dataEmployees";

import "./app.css";

class App extends Component {
  _maxId = "abc";
  _maxIdNum = 5;

  state = {
    data: [...data],
    term: '',
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this._maxIdNum++ + this._maxId,
    };

    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  };

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
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    // if (term.length === 0) {
    //   return;
    // }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  };

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch(filter){
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const counterRise = data.filter(
      (item) => item.increase
    ).length;
    const visibleData = this.filterPost( this.searchEmp(data, term), filter);


    return (
      <div className="app">
        <AppInfo
          countWorkers={data.length}
          counterRise={counterRise}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter filter={filter}
                      onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
