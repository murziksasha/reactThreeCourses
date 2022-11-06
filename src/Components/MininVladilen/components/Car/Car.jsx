import { Component, Fragment } from "react";
import './Car.scss';



class Car extends Component {

  componentDidMount() {

    if(this.props.index === 1) {
      this.inputRef.focus();
    }

  }

  render(){
    const {name, year, onChangeName, onDelete} = this.props;


    const inputClasses = ['input'];
    if(name !== "") {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    //make text in input bold
    if(name.length > 3) {
      inputClasses.push('bold');
    }

    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
      },
    }

    return (
      <div className="car" style={style}>
        <h3>{name}  </h3>
        <p><strong>it's built in{year}</strong></p>
        <input 
          ref={(inputRef) => this.inputRef = inputRef}
          type="text" 
          onChange={(e)=> onChangeName(e)} 
          value={name}
          className={inputClasses.join(' ')}
        />
        <button onClick={onDelete}>click</button>
      </div>

    )
  }
}


export default Car;