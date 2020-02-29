import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import ProductCard from '../ProductCard/ProductCard.js';
import Pagination from '../Pagination/Pagination';

class ProductsList extends LogRender {
  getCurrentPageFromUrl = () => {
    const params = queryString.parse(this.props.location.search);
    const pageParam = params.page;
    if (!pageParam) {
      return 1;
    }
    const currentPage = parseInt(pageParam, 10);

    return currentPage;
  }
  getProductsOnPage = () => {
    const currentPage = this.getCurrentPageFromUrl();

    const startPosition = this.props.productsPerPage*(currentPage - 1);
    const endPosition = startPosition + this.props.productsPerPage;
    const productsOnPage = this.props.filteredProducts.slice(startPosition, endPosition);
  
    return productsOnPage;
  }

  render() {
    const productsOnPage = this.getProductsOnPage();

    return (
      <React.Fragment>
        <List items={productsOnPage} renderItem={ProductCard} />

        {productsOnPage.length > 0 ? (
          <Pagination 
            currentPage={this.getCurrentPageFromUrl()}
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
  location: PropTypes.object
};

const ProductsListWithRouter = withRouter(ProductsList);

export default ProductsListWithRouter;
