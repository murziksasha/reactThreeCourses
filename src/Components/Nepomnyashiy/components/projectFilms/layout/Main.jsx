import { Component } from "react";
import "./Main.css";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";

import Search from "../components/Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    search: "rise",
    loading: true,
  };

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=81d20d2e&s=${this.state.search}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({loading: false})
      })
  }

  searchMovies = (str, type='all') => {
    this.setState({loading: true})
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=81d20d2e&s=${str}${type !== 'all' ? `&type=${type}` : ''
    }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({loading: false})
      })
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? (<Preloader />)  :  (<Movies films={movies}/>)}
      </main>
    );
  }
}
