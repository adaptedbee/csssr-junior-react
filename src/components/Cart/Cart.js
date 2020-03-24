import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Cart.css';

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

  render() {
    return (
      <section className="cart">
        <header className="cart__header">
          <h2 className="cart__headline">Корзина</h2>
          <p className={!this.props.isError && !this.props.isSaving ? 'cart__amount cart__amount--done' : 'cart__amount'}>
            {this.props.cartProducts.length}
          </p>
        </header>

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
