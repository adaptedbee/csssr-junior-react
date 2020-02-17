import React from 'react';

import './ProductPage.css';

const ProductPage = () => {
  return (
    <article className="page">
      <header className="page__header">
        <a className="page__back-link" href="#">
          <span className="visually-hidden">Назад в каталог</span>
        </a>
        <h1 className="page__headline">Название первого товара</h1>
      </header>

      <section className="product">
        <div className="product__status">
          В наличии
        </div>
        <img
          className="product__image"
          src="https://source.unsplash.com/random/224x200"
          alt="placeholder"
          width="224"
          height="200"
        />
        <div className="product__info">
          <h2 className="product__title">Название первого товара</h2>
          <div className="product__rating-wrapper">
            {/* RatingComponent */}
          </div>
          <div className="product__price-wrapper">
            <p className="product__price">23 000 Р</p>
            <p className="product__subprice">23 000 Р</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProductPage;
