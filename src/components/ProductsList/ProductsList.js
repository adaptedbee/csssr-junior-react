import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import { formatMoney } from 'csssr-school-utils';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import products from '../../products.json';
import RatingComponent from '../RatingComponent/RatingComponent.js';

class ProductCard extends LogRender {
  formatPrice = (number) => {
    return formatMoney(number, 0, '.', ' ') + ' ₽';
  }

  render() {
    const item = this.props.item;

    return (
      <ProductItem
        key={item.id}
        isInStock={item.isInStock}
        img={item.img}
        title={item.title}
        price={this.formatPrice(item.price)}
        subPriceContent={item.oldPrice ? this.formatPrice(item.oldPrice) : ''}
        maxRating={item.maxRating}
        rating={item.rating}
        ratingComponent={RatingComponent}
      />
    );
  }
}

class ProductsList extends LogRender {
  render() {
    const filteredProducts = products
      .filter(item => item.price >= this.props.minPrice && item.price <= this.props.maxPrice)
      .filter(item => this.props.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= this.props.discount/100));

    return (
      <List items={filteredProducts} renderItem={ProductCard} />
    );
  }
}

ProductsList.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  discount: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.string)
};
export default ProductsList;
