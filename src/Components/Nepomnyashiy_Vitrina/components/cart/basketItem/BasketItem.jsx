import './basketItem.scss';

import React from 'react';

function BasketItem(props) {
  const {
    removeFromBasket = Function.prototype,
    incrDecrGoods = Function.prototype
  } = props;
  const {
    id,
    name,
    price,
    quantity,
  }  = props;

  let count = quantity;

  
  return (
    <li href="#!" className="collection-item active">{name} x 
    <button className='btn secondary' onClick={()=>incrDecrGoods(id, 1)}>+</button>{count}<button className='btn secondary' onClick={()=>incrDecrGoods(id, -1)}>-</button>  = {price}
      <span>
        <i className='material-icons basket-delete'
        onClick={()=>removeFromBasket(id)}
        >close</i>
      </span>
    </li>
  );
}

export default BasketItem;