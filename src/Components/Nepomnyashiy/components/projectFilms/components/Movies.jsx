import Movie from "./Movie";

export default function Movies(props) {
  const {films = []} = props;

  return (
  <div className="movies">
    { films.length ? 
    films.map(movie => {
     return <Movie key = {movie.imdbID}{...movie}/>
      })  : <h4>Nothing found</h4>
    }
  </div>
  )
}