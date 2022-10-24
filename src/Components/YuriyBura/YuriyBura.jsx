import { Component } from 'react';

import './YuriyBura.css';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import todoData from './data/todoData';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import AddListItem from './components/addListItem/addListItem';


class YuriyBura extends Component {
  _partTwoId = 100;

  state = {
    data: [...todoData],
    term: '',
    filter: 'all', //all, active, done
  }

  _createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this._partTwoId++,
    }
  }

  _toggleProperty(arr, id, propName) {
    return ( arr.map(item => {
        if(item.id === id) {
          return {...item, [propName]: !item[propName]}
        }
          return item;
        })
      )

      

  }

  deleteItem = (id) => {
      this.setState(({ data }) => {
        return {
          data: data.filter(item => item.id !== id),
        }
      });
    }

  onItemAdd = (text)=> {

    const newItem = this._createToDoItem(text);

    this.setState(({data}) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      }
    })
  }

  
  onToggleDone = (id)=> {
    this.setState(({data}) => ({
      data: this._toggleProperty(data,id, 'done')
    }));
  }


  onToggleImportant = (id) => {
    this.setState(({data}) => ({
      data: this._toggleProperty(data,id, 'important')
    }));

  }

  search = (items, term) => {
    if(term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
      .toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchChange = (term)=>{
    this.setState({term});
  }

  onFilterChange = (filter)=>{
    this.setState({filter});
  }

  filter = (items, filter)=>{
    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item)=> !item.done);
      case 'done':
        return items.filter((item)=> item.done);
      default: return items;
    };
  }

render() {
  const {data, term, filter} = this.state;

  const visibleItems = this.filter(this.search(data, term), filter);
  const doneCount = data.filter((el)=> el.done).length;
  const toDoCount = data.length - doneCount;

  return (
    <div className='todo-app'>
    <AppHeader toDo={toDoCount} done={doneCount}/>
    <ItemStatusFilter 
      filter = {filter}
      onFilterChange = {this.onFilterChange}/>
    <SearchPanel onSearchChange = {this.onSearchChange}/>
    <AddListItem
      onItemAdd = {this.onItemAdd}/>
    <TodoList todos = {visibleItems}
              onDeleted={this.deleteItem}
              onToggleDone = {this.onToggleDone}
              onToggleImportant = {this.onToggleImportant}/>

  </div>
  )
}

}

export default  YuriyBura;