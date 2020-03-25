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

export const saveCartStart = () => {
  return {
    type: types.SAVE_CART_START
  }
};

export const saveCartSuccess = () => {
  return {
    type: types.SAVE_CART_SUCCESS
  }
};

export const saveCartFail = (error) => {
  return {
    type: types.SAVE_CART_FAIL,
    payload: {
      error
    }
  }
};
