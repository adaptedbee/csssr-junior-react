import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

import { goToPage } from '../store/pagination/actions';
import { getFilters } from '../store/filters/reducer';
import { getCurrentPage, getProductsPerPage } from '../store/pagination/reducer';

const mapStateToProps = ({filters, pagination}) => {
  return {
    filters: getFilters(filters),
    currentPage: getCurrentPage(pagination),
    productsPerPage: getProductsPerPage(pagination)
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

