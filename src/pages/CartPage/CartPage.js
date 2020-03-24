import React from 'react';
import { Link } from 'react-router-dom';

import CartContainer from '../../containers/CartContainer';
import ProductCard from '../../components/ProductCard/ProductCard.js';
import List from '../../components/List/List';

const CartPage = () => {
  const cartProducts = [];

  return (
    <div className="container container--padding-top">
      <div className="container__left"></div>
      <div className="container__center">
        <article className="page">
          <header className="page__header">
            <Link to="/" className="page__back-link">
              <span className="visually-hidden">Назад в каталог</span>
            </Link>
            <h1 className="page__headline">Корзина</h1>
          </header>

          <List items={cartProducts} renderItem={ProductCard} />
        </article>
      </div>
      <div className="container__right">
        <CartContainer />
      </div>
    </div>
  );
}

export default CartPage;
