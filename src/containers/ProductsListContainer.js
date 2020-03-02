import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { getProductsPerPage, getCurrentPage, getProductsOnPage } from '../store/pagination/reducer';
import { getFilteredProducts } from '../store/products/reducer';

const mapStateToProps = (state) => {
  return {
    productsPerPage: getProductsPerPage(state),
    filteredProducts: getFilteredProducts(state),
    currentPage: getCurrentPage(state),
    productsOnPage: getProductsOnPage(state)
  };
};

const ProductsListContainer = connect(
  mapStateToProps, 
  null
)(ProductsList);

export default ProductsListContainer;
