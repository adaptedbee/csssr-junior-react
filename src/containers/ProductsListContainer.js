import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { getFilters } from '../store/filters/reducer';
import { getProductsPerPage } from '../store/pagination/reducer';
import { getFilteredProducts, getProductsOnPage } from '../store/products/reducer';

const mapStateToProps = (state) => {
  return {
    filters: getFilters(state),
    productsPerPage: getProductsPerPage(state),
    filteredProducts: getFilteredProducts(state),
    productsOnPage: getProductsOnPage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ProductsListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(ProductsList);

export default ProductsListContainer;
