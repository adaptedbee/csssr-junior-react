import React from 'react';
import PropTypes from 'prop-types';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import ProductCard from '../ProductCard/ProductCard.js';
import Pagination from '../Pagination/Pagination';

class ProductsList extends LogRender {
  render() {
    const startPosition = this.props.productsPerPage*(this.props.currentPage - 1);
    const endPosition = startPosition + this.props.productsPerPage;
    const productsOnPage = this.props.filteredProducts.slice(startPosition, endPosition);

    return (
      <React.Fragment>
        <List items={productsOnPage} renderItem={ProductCard} />

        {productsOnPage.length > 0 ? (
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
  filteredProducts: PropTypes.array
};

export default ProductsList;
