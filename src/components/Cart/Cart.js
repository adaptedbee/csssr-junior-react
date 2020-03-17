import React from 'react';

import './Cart.css';

const Cart = () => {
  return (
    <section className="cart">
      <header className="cart__header">
        <h2 className="cart__headline">Корзина</h2>
        <p className="cart__amount cart__amount--done">0</p>
      </header>

      <button className="button">Сохранить корзину</button>

      <button className="button">Очистить корзину</button>

      <a className="cart__link" href="#">Перейти в корзину</a>
    </section>
  );
}

export default Cart;
