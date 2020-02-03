import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { goToPage } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    currentPage: state.currentPage,
    productsPerPage: state.productsPerPage
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

