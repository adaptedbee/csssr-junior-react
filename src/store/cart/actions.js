import * as types from './actionTypes';

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      product
    }
  }
};

export const removeFromCart = (product) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      product
    }
  }
};

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  }
};
