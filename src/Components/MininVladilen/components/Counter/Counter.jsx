import { Component, Fragment } from "react";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component{
  state = {
    counter: 0,
  }

  handleClick (num) {
    this.setState({
      counter: this.state.counter + num
    });
  }
  render() {
    return (
      <Fragment>
        <h2>Counter {this.state.counter}</h2>
        <Counter2/>
        <button onClick={this.handleClick.bind(this, 1)} onHandleClick>+</button>
        <button onClick={this.handleClick.bind(this, -1)}>-</button>
      </Fragment>
    )

  }
}