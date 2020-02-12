import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { goToPage } from '../store/pagination/actions';
import { getFilters } from '../store/filters/reducer';
import { getCurrentPage, getProductsPerPage } from '../store/pagination/reducer';
import { getFilteredProducts, getProductsOnPage } from '../store/products/reducer';

const mapStateToProps = (state) => {
  return {
    filters: getFilters(state),
    currentPage: getCurrentPage(state),
    productsPerPage: getProductsPerPage(state),
    filteredProducts: getFilteredProducts(state),
    productsOnPage: getProductsOnPage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToPage: (page) => dispatch(goToPage(page))
  };
};

const ProductsListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductsList);

export default ProductsListContainer;
