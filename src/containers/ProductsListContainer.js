import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList/ProductsList.js';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    currentPage: state.currentPage,
    productsPerPage: state.productsPerPage
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

