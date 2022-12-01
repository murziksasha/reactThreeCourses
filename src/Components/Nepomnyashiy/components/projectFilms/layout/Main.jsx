import { useState, useEffect } from "react";
import "./Main.css";

import Movies from "../components/Movies";
import Preloader from "../components/Preloader";

import Search from "../components/Search/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main (){

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('predator')


  useEffect(()=>{
        fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=81d20d2e&s=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
          setMovies(data.Search);
          setLoading(false);
        
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [])

  const searchMovies = (str, type='all') => {
    setLoading(false);
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=81d20d2e&s=${str}${type !== 'all' ? `&type=${type}` : ''
    }`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMovies(data.Search);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  };

    return (
      <main className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? (<Preloader />)  :  (<Movies films={movies}/>)}
      </main>
    );
}
