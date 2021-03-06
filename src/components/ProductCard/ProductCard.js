import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import { Link } from 'react-router-dom';

import LogRender from '../LogRender/LogRender.js';
import RatingComponent from '../RatingComponent/RatingComponent.js';
import formatPrice from '../../utils/utils';
import AddToCartButtonContainer from '../../containers/AddToCartButtonContainer.js';

class ProductCard extends LogRender {
  render() {
    const item = this.props.item;

    return (
      <React.Fragment>
        <Link to={{pathname: `/product/${item.id}`}}>
          <ProductItem
            key={item.id}
            isInStock={item.status === 'IN_STOCK'}
            img={item.img}
            title={item.name}
            price={formatPrice(item.price)}
            subPriceContent={item.oldPrice ? formatPrice(item.oldPrice) : ''}
            maxRating={5}
            rating={item.stars}
            ratingComponent={RatingComponent}
          />
        </Link>

        <AddToCartButtonContainer product={item} />
      </React.Fragment>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.object
};

export default ProductCard;
