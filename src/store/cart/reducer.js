import * as types from './actionTypes';

const initialState = {
  cartProducts: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART : {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload.productId]
      };
    }
    case types.REMOVE_FROM_CART : {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(item => item !== action.payload.productId)
      };
    }
    case types.CLEAR_CART : {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
}

export const getCartProducts = (state) => state.cart.cartProducts;
