

function Card (props, {children}) {

  const {rating, text, handleClick} = props;
  return(
    <>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </>
  )

}

export default Card;