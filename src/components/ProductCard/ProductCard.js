import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';

import LogRender from '../LogRender/LogRender.js';
import RatingComponent from '../RatingComponent/RatingComponent.js';
import formatPrice from '../../utils/utils';

class ProductCard extends LogRender {
  render() {
    const item = this.props.item;

    return (
      <ProductItem
        key={item.id}
        isInStock={item.isInStock}
        img={item.img}
        title={item.title}
        price={formatPrice(item.price)}
        subPriceContent={item.oldPrice ? formatPrice(item.oldPrice) : ''}
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
