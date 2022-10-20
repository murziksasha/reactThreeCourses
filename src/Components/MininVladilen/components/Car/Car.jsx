import { Component } from "react";

class Car extends Component {
  render () {
    const {name, year, handleClick} = this.props;
    return (
      <div>
        <h3>{name}  </h3>
        <p><strong>it's built in{year}</strong></p>
        <button onClick={handleClick}>click</button>
      </div>

    )
  }
}

export default Car;