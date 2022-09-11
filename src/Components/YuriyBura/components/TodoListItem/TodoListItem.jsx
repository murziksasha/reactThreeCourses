import './todoListItem.css';

function TodoListItem({label, important=false, key}) {
  const style = {
    color: important ? 'steelblue' : null,
    fontWeight: important ? 'bold': 'normal'
  }
  return (
    <span className='todo-list-item'>
      <span 
      className="todo-list-item-label"
      style={style}>
        {label}</span>
        <button type='button'
                className='btn btn-outline-success btn-sm'>
                  <i className='fa fa-exclamation'/>
                </button>
        <button type='button'
                className='btn btn-outline-danger btn-sm'>
          <i className='fa fa-trash'/>
        </button>
    </span>

  )
}

export default TodoListItem;