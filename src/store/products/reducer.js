import { createSelector } from 'reselect';

import { getFilters, getCategories } from '../filters/reducer';
import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  products: []
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_START: {
      return Object.assign({}, state, {
        isLoading: true, 
        isError: false
      });
    }
    case types.FETCH_PRODUCTS_FAIL: {
      return Object.assign({}, state, {
        isLoading: false, 
        isError: true
      });
    }
    case types.FETCH_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false, 
        isError: false,
        products: action.payload.products
      });
    }
    default: {
      return state;
    }
  }
}

export const getProducts = (state) => state.products.products;

export const getFilteredProducts = createSelector(
  [getFilters, getProducts, getCategories],
  (filters, products, categories) => {
    const filteredProducts = products
      .filter(item => item.price >= filters.minPrice && item.price <= filters.maxPrice)
      .filter(item => filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= filters.discount/100))
      .filter(item => {
        if (categories && categories.length > 0) {
          return categories.includes(item.category);
        } else {
          return true;
        }
      });
  
    return filteredProducts;
  }
);

export const getProductsLoading = (state) => state.products.isLoading;
export const getProductsError = (state) => state.products.isError;
