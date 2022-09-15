
import './todoListItem.css';

const TodoListItem = (props) => {


    const {label, onDeleted, important, done, onToggleDone, onToggleImportant} = props;

    let styleDone = 'todo-list-item';

    styleDone = done ? styleDone += ' done':  'todo-list-item';

    let styleImportant = 'todo-list-item-label';

    styleImportant = important ? styleImportant += ' important' : 'todo-list-item-label';



    return (
      <span className={styleDone}>
        <span 
        className={styleImportant}
        onClick={onToggleDone}>
          {label}</span>
          <button type='button'
                  className='btn btn-outline-success btn-sm'
                  onClick={onToggleImportant}>
                    <i className='fa fa-exclamation'/>
                  </button>
          <button type='button'
                  className='btn btn-outline-danger btn-sm'
                  onClick={onDeleted}>
            <i className='fa fa-trash'/>
          </button>
      </span>
  
    )
}

export default TodoListItem;