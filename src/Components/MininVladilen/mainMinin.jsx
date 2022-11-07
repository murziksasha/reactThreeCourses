import { Component, createContext } from "react";
import "./mainMinin.css";

import Quiz from "./components/practice_project/components/containers/Quiz/Quiz";


import Main_practice from "./components/practice_project/Main_practice";

import Car from "./components/Car/Car";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Counter from "./components/Counter/Counter";
import Layaout from "./components/practice_project/hoc/Layaout/Layaout";

export const ClickedContext = createContext(false);


class Minin extends Component {
  state = {
    cars: [
      { name: "ford", year: 1944 },
      { name: "lance", year: "2002" },
      { name: "mazda", year: 2022 },
    ],
    pageTitle: "React Components",
    showCars: false,
    clicked: false,
  };

  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  };

  toggleCars = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  deleteHandler = (index) => {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({ cars });
  };

  isClicked = () => {
    this.setState((prev) => ({
      clicked: !prev.clicked,
    }));
  };

  render() {
    const { cars, pageTitle, showCars } = this.state;
    return (
      <div>
        <div className="layaout">
          <Layaout>
            <Quiz/>
          </Layaout>
        </div>

        <button type="button" onClick={this.toggleCars}>
          Show Cars
        </button>
        <h1>
          {pageTitle}
          <br />
          {this.props.myTitle}
        </h1>
        <br />
        <br />
        <br />

        <div
          style={{
            color: "red",
            padding: 20,
            boxShadow: "0 4px 5px gray",
            ":hover": {
              cursor: "pointer",
              border: "1px solid #aaa",
              boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
            },
          }}
        >
          {showCars
            ? cars.map((item, i) => {
                return (
                  <ErrorBoundary key={i}>
                    <Car
                      index={i}
                      name={item.name}
                      year={item.year}
                      onChangeName={(e) =>
                        this.onChangeName(e.target.value, i)
                      }
                      onDelete={this.deleteHandler.bind(this, i)}
                    />
                  </ErrorBoundary>
                );
              })
            : ""}
        </div>
        <br />
        <br />
        <br />

        <button onClick={this.isClicked}>isClicked - CHANGE</button>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
      </div>
    );
  }
}

export default Minin;
