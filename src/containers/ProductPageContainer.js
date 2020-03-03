import { connect } from 'react-redux';
import ProductPage from '../pages/ProductPage/ProductPage';

import { getProducts } from '../store/products/reducer';

const mapStateToProps = (state) => {
  return {
    products: getProducts(state)
  };
};

const ProductPageContainer = connect(
  mapStateToProps, 
  null
)(ProductPage);

export default ProductPageContainer;
