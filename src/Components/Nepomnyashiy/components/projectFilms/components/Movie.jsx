

export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
          <div className="card-image waves-effect waves-block waves-light">
            {
              poster ? <img className="activator" src={poster} alt="poster"/> 
              : <img className="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPyLOwAWlnaCmqlzTfsajb2GINSUpttC_ihHy1lFwPA&s"alt="poster"/> 
            }
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
          </div>
    </div>
  )
}