import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCartProducts } from '../store/cart/reducer';
import { addToCart, removeFromCart } from '../store/cart/actions.js';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productId) => dispatch(addToCart(productId)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  }
};

const AddToCartButtonContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddToCartButton);

AddToCartButtonContainer.propTypes = {
  product: PropTypes.object
};

export default AddToCartButtonContainer;
