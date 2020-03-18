import React from 'react';
import PropTypes from 'prop-types';

import './Cart.css';

const Cart = (props) => {
  return (
    <section className="cart">
      <header className="cart__header">
        <h2 className="cart__headline">Корзина</h2>
        <p className="cart__amount cart__amount--done">
          {props.cartProducts.length}
        </p>
      </header>

      <button className="button">Сохранить корзину</button>

      <button onClick={props.clearCart} className="button">
        Очистить корзину
      </button>

      <a className="cart__link" href="/">Перейти в корзину</a>
    </section>
  );
}

Cart.propTypes = {
  cartProducts: PropTypes.array,
  clearCart: PropTypes.func,
  isSaving: PropTypes.bool,
  isError: PropTypes.bool,
  saveCartStart: PropTypes.func,
  saveCartSuccess: PropTypes.func,
  saveCartFail: PropTypes.func
};

export default Cart;
