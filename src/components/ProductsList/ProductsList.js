import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import ProductCard from '../ProductCard/ProductCard.js';
import Pagination from '../Pagination/Pagination';

class ProductsList extends LogRender {
  render() {
    return (
      <React.Fragment>
        <List items={this.props.productsOnPage} renderItem={ProductCard} />

        {this.props.productsOnPage.length > 0 ? (
          <Pagination 
            currentPage={this.props.currentPage} 
            productsPerPage={this.props.productsPerPage}
            productsCount={this.props.filteredProducts.length}
            goToPage={this.props.goToPage}
          />
        ) : ''}
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  filters: PropTypes.object,
  currentPage: PropTypes.number,
  productsPerPage: PropTypes.number,
  goToPage: PropTypes.func,
  filteredProducts: PropTypes.array,
  productsOnPage: PropTypes.array
};

export default ProductsList;
