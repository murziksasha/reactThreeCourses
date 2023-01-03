

import React from 'react';

function GoodsItem(props) {
  const {
    id,
    name,
    descrioption,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <>
      <div className="card" >
        <div className="card-image">
          <img src={full_background} alt={name}/>
        </div>
        <div className="card-content">
          <p>{descrioption}</p>
        </div>
        <div className="card-action">
          <button className='btn btn-danger' style={{marginRight: '20px'}}
          onClick={()=>addToBasket({id, name, price})}
          > BUY  </button>
          <span className="card-title">{name}</span>

          <span className='right' style={{fontSize: '1.8rem'}}>{price} uah</span>
        </div>
      </div>
    </>
  )
}

export default GoodsItem;