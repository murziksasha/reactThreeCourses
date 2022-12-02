import { Component, createContext } from "react";
import { Route } from "react-router-dom";

import Quiz from "../practice_project/components/containers/Quiz/Quiz";


import Main_practice from "../practice_project/Main_practice";

import Car from "../Car/Car";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Layaout from "../practice_project/hoc/Layaout/Layaout";



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
        {/* <div className="layaout">
          <Layaout>
            <Quiz/>
          </Layaout>
        </div> */}

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
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">about</a></li>
          </ul>
          <br />
          <hr />
          <br />
          <Route exact path='/' render={()=> <h1>Home Page</h1>}/>
        </nav>
        <hr /><br />
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

      </div>
    );
  }
}

export default Minin;
