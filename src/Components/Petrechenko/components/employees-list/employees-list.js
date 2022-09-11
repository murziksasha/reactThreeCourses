import EmployeesListItem from "../employees-list-item/employees-list-item";


import './employees-list.css';

const EmployeesList = ({data}) => {
    const elem = data.map(item => {
        const {id, ...itemProps} = item;
       return (
       <EmployeesListItem key={id} {...itemProps}/>
       )
    })
    return (
        <ul className="app-list list-group">
            {elem}
        </ul>
    )
}

export default EmployeesList;