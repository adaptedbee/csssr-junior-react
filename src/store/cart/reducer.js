import * as types from './actionTypes';

const initialState = {
  cartProducts: [],
  isSaving: false,
  isError: false,
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
    case types.SAVE_CART_START: {
      return {
        ...state,
        isSaving: true, 
        isError: false
      };
    }
    case types.SAVE_CART_FAIL: {
      return {
        ...state,
        isSaving: false, 
        isError: true
      };
    }
    case types.SAVE_CART_SUCCESS: {
      return {
        ...state,
        isSaving: false, 
        isError: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getCartProducts = (state) => state.cart.cartProducts;
export const getCartSaving = (state) => state.cart.isSaving;
export const getCartError = (state) => state.cart.isError;
