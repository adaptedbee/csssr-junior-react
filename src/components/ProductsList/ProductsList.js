import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import products from '../../products.json';
import ProductCard from '../ProductCard/ProductCard.js';

class ProductsList extends LogRender {
  render() {
    const filteredProducts = products
      .filter(item => item.price >= this.props.filters.minPrice && item.price <= this.props.filters.maxPrice)
      .filter(item => this.props.filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= this.props.filters.discount/100))
      .filter(item => this.props.filters.categories.includes(item.category));

    return (
      <List items={filteredProducts} renderItem={ProductCard} />
    );
  }
}

ProductsList.propTypes = {
  filters: PropTypes.object
};

export default ProductsList;
