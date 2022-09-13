
import './employees-list-item.css';

const EmployeesListItem = (props) => {


        const {name, salary, onDelete, onToggleProp, increase, rise} = props;

        let styleItem = "list-group-item d-flex justify-content-between";

        styleItem = increase ? styleItem + " increase" : "list-group-item d-flex justify-content-between";

        const likeStyle = rise ? styleItem + " like" : "list-group-item d-flex justify-content-between";


        return(
            <li className= {styleItem + " " + likeStyle} >
                <span 
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise">
                {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star "></i>
                </div>
            </li>
        )
}

export default EmployeesListItem;