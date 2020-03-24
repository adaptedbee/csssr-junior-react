import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartContainer from '../../containers/CartContainer';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import List from '../../components/List/List';

const CartPage = (props) => {
  return (
    <div className="container container--padding-top">
      <div className="container__left"></div>
      <div className="container__center">
        <article className="page page--full-width">
          <header className="page__header">
            <Link to="/" className="page__back-link">
              <span className="visually-hidden">Назад в каталог</span>
            </Link>
            <h1 className="page__headline">Корзина</h1>
          </header>

          <List items={props.cartProducts} renderItem={ProductCard} />
        </article>
      </div>
      <div className="container__right">
        <CartContainer />
      </div>
    </div>
  );
}

CartPage.propTypes = {
  cartProducts: PropTypes.array
};

export default CartPage;
