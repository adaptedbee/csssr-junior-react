import * as types from './actionTypes';

export const addToCart = (productId) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      productId
    }
  }
};

export const removeFromCart = (productId) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      productId
    }
  }
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  }
};
