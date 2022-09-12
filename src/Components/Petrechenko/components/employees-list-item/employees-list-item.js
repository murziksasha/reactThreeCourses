import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {

    state = {
        increase: this.props.increase,
        like: this.props.like,
    }

    classStyleIncrease = (paramOfState)=> {

        switch(paramOfState){
            case 'increase':
                this.setState(({increase})=>({increase: !increase}));
                return;
               
            case 'like':
                this.setState(({like}) => ({like: !like}));
                return;
                
        }

    }


    

    render(){
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let classLiNames = increase ? "list-group-item d-flex justify-content-between increase " : "list-group-item d-flex justify-content-between";
        let classStarName = like ? "like" : '';



        return(
            <li className= {classLiNames +' '+ classStarName} >
                <span 
                className="list-group-item-label"
                onClick={()=> this.classStyleIncrease('like')}>
                {name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={()=> this.classStyleIncrease('increase')}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }
}

export default EmployeesListItem;