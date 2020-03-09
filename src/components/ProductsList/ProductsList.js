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
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isError: false,
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts(FETCH_PRODUCTS_URL);
  }

  fetchProducts = (url) => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response);
        };
      })
      .then(result => {
        if (result && result.result === 'OK' && result.products) {
          this.setState({
            isLoading: false,
            isError: false,
            products: result.products
          });
        }
        if (result && result.result === 'ERROR' && result.message) {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          isError: true
        });
      })
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading && !this.state.isError ? (
          <img 
            className="page__image" 
            src="/img/loading-items.svg"
            width="736"
            height="648"
            alt="Загрузка..." />
        ) : ''}

        {!this.state.isLoading && !this.state.isError && this.state.products && this.state.products.length > 0 ? (
          <React.Fragment>
            <List items={this.props.productsOnPage} renderItem={ProductCard} />

            {this.props.productsOnPage.length > 0 ? (
              <Pagination 
                currentPage={this.props.currentPage}
                productsPerPage={this.props.productsPerPage}
                productsCount={this.props.filteredProducts.length}
                urlSearchParams={this.props.urlSearchParams}
              />
            ) : ''}
          </React.Fragment>
        ) : ''}

        {!this.state.isLoading && !this.state.isError && (!this.state.products || this.state.products.length === 0) ? (
          <NotFoundPage headline={'Товары не найдены'} showBackLink={false} />
        ) : ''}

        {!this.state.isLoading && this.state.isError ? (
          <NotFoundPage headline={'Произошла ошибка'} showBackLink={false} />
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
  urlSearchParams: PropTypes.object
};

const ProductsListWithRouter = withRouter(ProductsList);

export default ProductsListWithRouter;
