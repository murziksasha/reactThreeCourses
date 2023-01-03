import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import Preloader from "./Preloader";

import Goods from "./Goods";
import Cart from "./cart/Cart";
import BasketList from "./cart/basketList/BasketList";
import Alert from "./alert/Alert";


function Shop(props) {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => { //в пропс объект передается
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id); //проверяем был ли ранее товар по ид

    if(itemIndex < 0){ //-1 возвращает findIndex товар не был добавлен ранее
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem]);
    } else { //если ранее товар был добавле увел количество конкретного товара
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
    setAlertName(item.name);
  }

  const incrDecrGoods = (itemId, num) =>{
    const newOrder = order.map(el => {
      if(el.id === itemId){
        const newQuantity = +(el.quantity) + num;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity: 0,
        }
      } else {
        return el;
      }
    });
    setOrder(newOrder); 
  }

  const removeFromBasket = itemId => { //для удаления товара надо знать его id
    const newOrder = order.filter(el=> el.id !== itemId);
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const closeAlert = ()=>{
    setAlertName('');
  }

  useEffect(()=>{
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
    .then(res => res.json())
    .then(data => {
      data.featured && setGoods(data.featured);
      setLoading(false);
    })
  }, []);


  return (

  <main className="container content">
    <Cart quantity = {order.length}
    handleBasketShow={handleBasketShow}
    />
    {
      loading ? <Preloader/> : <Goods goods={goods} addToBasket={addToBasket}/>
    }
    {
      isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}
      removeFromBasket={removeFromBasket}
      incrDecrGoods={incrDecrGoods}
      />
    }
    {
      alertName && <Alert name={alertName} closeAlert={closeAlert}/>
    }
  </main>
  )
}

export default Shop;
