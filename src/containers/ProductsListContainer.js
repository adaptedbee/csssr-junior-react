import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { goToPage } from '../store/pagination/actions';

const mapStateToProps = ({filters, pagination}) => {
  return {
    filters: filters.filters,
    currentPage: pagination.currentPage,
    productsPerPage: pagination.productsPerPage
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

