import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import { formatMoney } from 'csssr-school-utils';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
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
    return (
      <List items={this.props.products} renderItem={ProductCard} />
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array
};

export default ProductsList;
