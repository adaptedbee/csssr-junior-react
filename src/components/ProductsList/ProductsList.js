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
            productsPerPage={this.props.productsPerPage}
            productsCount={this.props.filteredProducts.length}
          />
        ) : ''}
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  filters: PropTypes.object,
  productsPerPage: PropTypes.number,
  filteredProducts: PropTypes.array,
  productsOnPage: PropTypes.array
};

export default ProductsList;
