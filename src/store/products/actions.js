import * as types from './actionTypes';

export const fetchProductsStart = () => {
  return {
    type: types.FETCH_PRODUCTS_START
  }
};

export const fetchProductsSuccess = (products) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: {
      products
    }
  }
};

export const fetchProductsFail = (error) => {
  return {
    type: types.FETCH_PRODUCTS_FAIL,
    payload: {
      error
    }
  }
};
