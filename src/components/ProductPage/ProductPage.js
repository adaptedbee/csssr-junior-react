import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import RatingComponent from '../RatingComponent/RatingComponent.js';
import './ProductPage.css';
import formatPrice from '../../utils/utils';

const range = to => [...Array(to).keys()].map(i => i + 1);

class ProductPage extends React.Component {
  render() {
    const productIdParam = this.props.match.params['id'];
    const productId = parseInt(productIdParam, 10);
    const product = this.props.products.find(item => item.id === productId);

    return (
      <article className="page">
        <header className="page__header">
          <Link to="/" className="page__back-link">
            <span className="visually-hidden">Назад в каталог</span>
          </Link>
          <h1 className="page__headline">
            {product ? product.title : 'Товар не найден'}
          </h1>
        </header>
  
        {product ? (
          <section className={product.isInStock ? 'product' : 'product product--out-of-stock'}>
            <div className={product.isInStock ? 'product__status' : 'product__status product__status--out-of-stock'}>
              {product.isInStock ? 'В наличии' : 'Недоступен'}
            </div>
            <img
              className="product__image"
              src={product.img}
              alt={product.title}
              width="224"
              height="200"
            />
            <div className="product__info">
              <h2 className="product__title">
                {product.title}
              </h2>
              <div className="product__rating-wrapper">
                {range(product.maxRating).map(i => 
                  <RatingComponent key={i} isFilled={i <= product.rating} />
                )}
              </div>
              <div className="product__price-wrapper">
                <p className="product__price">
                  {formatPrice(product.price)}
                </p>
                <p className="product__subprice">
                  {product.oldPrice ? formatPrice(product.oldPrice) : ''}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <img 
            className="page__not-found-image" 
            src="img/planet-lamp.svg"
            width="512"
            height="512"
            alt="Товар не найден" />
        )}
      </article>
    );
  }
}

ProductPage.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object
};

const ProductPageWithRouter = withRouter(ProductPage);

export default ProductPageWithRouter;
