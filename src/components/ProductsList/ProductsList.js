import React from 'react';
import PropTypes from 'prop-types';

import './ProductsList.css';

const ProductsList = props => {
  const productsLimit = props.limit ? props.limit : props.products.length;

  return (
    <ul className="products-list">
      {props.items.slice(0, productsLimit).map((item, index) => 
        props.renderItem(item)
      )}
    </ul>
  );
}

ProductsList.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
  limit: PropTypes.number
};

export default ProductsList;
