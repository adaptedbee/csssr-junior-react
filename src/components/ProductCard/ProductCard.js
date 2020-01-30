import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import { formatMoney } from 'csssr-school-utils';

import LogRender from '../LogRender/LogRender.js';
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

ProductCard.propTypes = {
  item: PropTypes.object
};

export default ProductCard;
