import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import products from '../../products.json';
import ProductCard from '../ProductCard/ProductCard.js';
import Pagination from '../Pagination/Pagination';

class ProductsList extends LogRender {
  render() {
    const filteredProducts = products
      .filter(item => item.price >= this.props.filters.minPrice && item.price <= this.props.filters.maxPrice)
      .filter(item => this.props.filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= this.props.filters.discount/100))
      .filter(item => this.props.filters.categories.includes(item.category));
    
    const startPosition = this.props.productsPerPage*(this.props.currentPage - 1);
    const endPosition = startPosition + this.props.productsPerPage;
    const productsOnPage = filteredProducts.slice(startPosition, endPosition);

    return (
      <React.Fragment>
        <List items={productsOnPage} renderItem={ProductCard} />

        <Pagination currentPage={this.props.currentPage} />
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  filters: PropTypes.object,
  currentPage: PropTypes.number,
  productsPerPage: PropTypes.number
};

export default ProductsList;
