import GoodsItem from './GoodsItem';

import React from 'react';

function Goods(props) {
  const {goods=[], addToBasket = Function.prototype} = props;

  if(!goods.length){
    return <h3>it's nothing here...</h3>
  }

  return (
    <div className="goods">
      {goods.map(item => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
      ))}
    </div>
  );
}

export default Goods;