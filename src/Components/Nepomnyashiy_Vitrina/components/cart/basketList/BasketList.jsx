import './basketlist.scss';

import BasketItem from '../basketItem/BasketItem';

function BasketList(props) {
  const {
    order = [], 
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incrDecrGoods = Function.prototype,
  } = props;  //список заказов
  const totalPrice = order.reduce((sum, el)=>{
    return sum + el.price * el.quantity;
  }, 0)
  return (
    <ul className="collection basket-list">
      <li href="#!" className="collection-item active">Basket</li>
    {  
      order.length ? order.map(item =>(
        <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket}
        incrDecrGoods={incrDecrGoods}/>
      )) : <li href="#!" className="collection-item active">the Basket is Empty...</li>
    }
      <li href="#!" className="collection-item active">Total price: {totalPrice} UAH
      </li>
      <li href="#!" className="collection-item active">
      <button className='btn btn-small btn-secondary'>describe</button></li>
      <i className="material-icons basket-close"
      onClick={handleBasketShow}
      >close</i>
  </ul>
  );
}

export default BasketList;