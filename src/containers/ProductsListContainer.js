import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { getProductsPerPage, getCurrentPage, getProductsOnPage } from '../store/pagination/reducer';
import { getFilteredProducts, getProductsLoading, getProductsError } from '../store/products/reducer';
import { getUrlSearchParams } from '../store/filters/reducer.js';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFail } from '../store/products/actions.js';

const mapStateToProps = (state) => {
  return {
    productsPerPage: getProductsPerPage(state),
    filteredProducts: getFilteredProducts(state),
    currentPage: getCurrentPage(state),
    productsOnPage: getProductsOnPage(state),
    urlSearchParams: getUrlSearchParams(state),
    isLoading: getProductsLoading(state),
    isError: getProductsError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsStart: () => dispatch(fetchProductsStart()),
    fetchProductsSuccess: (products) => dispatch(fetchProductsSuccess(products)),
    fetchProductsFail: (error) => dispatch(fetchProductsFail(error))
  }
};

const ProductsListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductsList);

export default ProductsListContainer;
