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

  

render() {
  const {data} = this.state;


  const doneCount = data.filter((el)=> el.done).length;
  const toDoCount = data.length - doneCount;

  return (
    <div className='todo-app'>
    <AppHeader toDo={toDoCount} done={doneCount}/>
    <ItemStatusFilter/>
    <SearchPanel/>
    <AddListItem
      onItemAdd = {this.onItemAdd}/>
    <TodoList todos = {data}
              onDeleted={this.deleteItem}
              onToggleDone = {this.onToggleDone}
              onToggleImportant = {this.onToggleImportant}/>

  </div>
  )
}

}

export default  YuriyBura;