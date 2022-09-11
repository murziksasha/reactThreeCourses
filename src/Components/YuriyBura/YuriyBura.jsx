import './YuriyBura.css';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import todoData from './data/todoData';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';


function YuriyBura() {

return <div>
  <AppHeader/>
  <ItemStatusFilter/>
  <SearchPanel/>
  <TodoList todos = {todoData}/>
</div>

}

export default  YuriyBura;