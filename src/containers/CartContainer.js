import { connect } from 'react-redux';

import Cart from '../components/Cart/Cart';
import { getCartProducts } from '../store/cart/reducer';
import { clearCart } from '../store/cart/actions.js';

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart())
  }
};

const CartContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Cart);

export default CartContainer;
