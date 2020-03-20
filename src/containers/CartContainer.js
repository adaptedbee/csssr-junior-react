import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';
import { getCartProducts, getCartSaving, getCartError } from '../store/cart/reducer';
import { clearCart, saveCartStart, saveCartSuccess, saveCartFail } from '../store/cart/actions.js';

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state),
    isSaving: getCartSaving(state),
    isError: getCartError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
    saveCartStart: () => dispatch(saveCartStart()),
    saveCartSuccess: () => dispatch(saveCartSuccess()),
    saveCartFail: (error) => dispatch(saveCartFail(error))
  }
};

const CartContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Cart);

export default CartContainer;
