import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCartProducts, getCartSaving } from '../store/cart/reducer';
import { addToCart, removeFromCart } from '../store/cart/actions.js';
import AddToCartButton from '../components/AddToCartButton/AddToCartButton';

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state),
    isSaving: getCartSaving(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
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
