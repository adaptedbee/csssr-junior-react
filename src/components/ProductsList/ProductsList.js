import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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
          />
        ) : ''}
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  productsPerPage: PropTypes.number,
  filteredProducts: PropTypes.array,
  currentPage: PropTypes.number,
  productsOnPage: PropTypes.array,
  location: PropTypes.object
};

const ProductsListWithRouter = withRouter(ProductsList);

export default ProductsListWithRouter;
