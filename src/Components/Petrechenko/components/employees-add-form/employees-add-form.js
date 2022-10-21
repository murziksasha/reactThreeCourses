import { Component } from 'react';

import './employees-add-from.scss';

class EmployeesAddForm extends Component {

    state = {
        name: '',
        salary: '',
    }

    onValueChange = (e) => {
        const target = e.target;
        this.setState({
            [target.name]: target.value,
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
      this.props.onAdd(this.state.name, this.state.salary);
      
      this.setState({
        name: '',
        salary: '',
      })

    }


    render(){
        const {name, salary} = this.state;

      return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmit}>
                <input
                    name="name" 
                    value={name}
                    onChange={(e) => this.onValueChange(e)}
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input 
                    name="salary"
                    value={salary}
                    onChange={(e) => this.onValueChange(e)}
                    type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
      )
    }
}

export default EmployeesAddForm;