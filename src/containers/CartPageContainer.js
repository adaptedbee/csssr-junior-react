import { connect } from 'react-redux';

import { getCartProducts } from '../store/cart/reducer';
import CartPage from '../pages/CartPage/CartPage';

const mapStateToProps = (state) => {
  return {
    cartProducts: getCartProducts(state)
  };
};

const CartPageContainer = connect(
  mapStateToProps, 
  null
)(CartPage);

export default CartPageContainer;
