

  const Book = (props) => {

    if(!props.name){
      return null;
    }
    
    return (
      <div className={props.name} data-text = "">
      <h2>Hello, {props.name ? <span>{props.name}</span> : "default name"}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      </div>
   )
  
  }

  export default Book;