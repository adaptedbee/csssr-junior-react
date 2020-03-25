import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Cart.css';
import formatPrice from '../../utils/utils';

const SAVE_CART_URL = 'https://course-api.csssr.school/save';

class Cart extends React.Component {
  saveCart = () => {
    this.props.saveCartStart();

    fetch(SAVE_CART_URL, {
      method: 'POST',
      body: JSON.stringify(this.props.cartProducts),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.props.saveCartFail(response);
      }
    })
    .then(result => {
      this.props.saveCartSuccess();
    })
    .catch(error => {
      this.props.saveCartFail(error);
    });
  }

  getTotalCartPrice = () => {
    if (!this.props.cartProducts || this.props.cartProducts.length === 0) {
      return 0;
    }
    return this.props.cartProducts.reduce((accumulator, product) => accumulator + 
    product.price, 0);
  }

  render() {
    return (
      <section className="cart">
        <header className="cart__header">
          <h2 className={!this.props.isError && !this.props.isSaving ? 'cart__headline cart__headline--done' : 'cart__headline'}>Корзина</h2>
        </header>

        <div className="cart__parameter">
          <p className="cart__parameter-name">Товаров</p>
          <p className="cart__parameter-value">
            {this.props.cartProducts.length}
          </p>
        </div>
        <div className="cart__parameter">
          <p className="cart__parameter-name">Всего</p>
          <p className="cart__parameter-value cart__parameter-value--big">
            {formatPrice(this.getTotalCartPrice())}
          </p>
        </div>

        {this.props.cartProducts.length > 0 && (
          <button 
            onClick={this.saveCart} 
            disabled={this.props.isSaving} 
            className="button"
          >
            Сохранить корзину
          </button>
        )}
  
        {this.props.cartProducts.length > 0 && (
          <button 
            onClick={this.props.clearCart} 
            disabled={this.props.isSaving} 
            className="button"
          >
            Очистить корзину
          </button>
        )}
        
        <Link to="/cart" className="cart__link">Перейти в корзину</Link>

        {this.props.isError && (
          <p className="cart__message">Ошибка сохранения корзины</p>
        )}
      </section>
    );
  }
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
