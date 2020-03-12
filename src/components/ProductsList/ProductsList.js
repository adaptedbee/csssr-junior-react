import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import ProductCard from '../ProductCard/ProductCard.js';
import Pagination from '../Pagination/Pagination';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.js';

const FETCH_PRODUCTS_URL = 'https://course-api.csssr.school/products';

class ProductsList extends LogRender {
  componentDidMount() {
    this.fetchProducts(FETCH_PRODUCTS_URL);
  }

  fetchProducts = (url) => {
    this.props.fetchProductsStart();

    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        this.props.fetchProductsFail(response);
      };
    })
    .then(result => {
      if (result && result.result === 'OK' && result.products) {
        this.props.fetchProductsSuccess(result.products);
      }
      if (result && result.result === 'ERROR' && result.message) {
        this.props.fetchProductsFail(result.message);
      }
    })
    .catch(error => {
      this.props.fetchProductsFail(error);
    })
  }

  render() {
    const { isLoading, isError, filteredProducts, productsOnPage, currentPage, productsPerPage, urlSearchParams } = this.props;
    
    return (
      <React.Fragment>
        {isLoading && !isError ? (
          <img 
            className="page__image" 
            src="/img/loading-items.svg"
            width="736"
            height="648"
            alt="Загрузка..." />
        ) : null}

        {!isLoading && !isError && filteredProducts && filteredProducts.length > 0 ? (
          <React.Fragment>
            <List items={productsOnPage} renderItem={ProductCard} />

            {productsOnPage.length > 0 ? (
              <Pagination 
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                productsCount={filteredProducts.length}
                urlSearchParams={urlSearchParams}
              />
            ) : null}
          </React.Fragment>
        ) : null}

        {!isLoading && !isError && (!filteredProducts || filteredProducts.length === 0) ? (
          <NotFoundPage headline={'Товары не найдены'} showBackLink={false} />
        ) : null}

        {!isLoading && isError ? (
          <NotFoundPage headline={'Произошла ошибка'} showBackLink={false} />
        ) : null}
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  productsPerPage: PropTypes.number,
  filteredProducts: PropTypes.array,
  currentPage: PropTypes.number,
  productsOnPage: PropTypes.array,
  urlSearchParams: PropTypes.object,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  fetchProductsStart: PropTypes.func,
  fetchProductsSuccess: PropTypes.func,
  fetchProductsFail: PropTypes.func
};

const ProductsListWithRouter = withRouter(ProductsList);

export default ProductsListWithRouter;
