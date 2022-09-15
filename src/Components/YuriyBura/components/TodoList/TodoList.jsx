import './todoList.css';

import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({todos, onDeleted, onToggleDone, onToggleImportant}) {

  const elements = todos.map(item => {
    const {id, ...itemProps} = item;
    return (
      <li key = {id} className="list-group-item">
        <TodoListItem 
        {...itemProps}
        onDeleted={()=> onDeleted(id)}
        onToggleDone={()=> onToggleDone(id)}
        onToggleImportant={()=> onToggleImportant(id)}
      /></li>
    )
  })

  return (
  <ul className="list-group todo-list">
    {elements}
  </ul>
  )
}

export default TodoList;