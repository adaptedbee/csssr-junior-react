import { minBy, maxBy } from 'csssr-school-utils';
import queryString from 'query-string';
import { createSelector } from 'reselect';

import * as types from './actionTypes';
import * as productsTypes from '../products/actionTypes';

const initialState = {
  filters: {
    minPrice: 0,
    maxPrice: 0,
    discount: 0
  },
  allCategories: [],
  productsMinPrice: 0,
  productsMaxPrice: 0
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PRICE: {
      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: action.payload.minPrice,
          maxPrice: action.payload.maxPrice
        }
      };
    }
    case types.UPDATE_DISCOUNT: {
      return {
        ...state,
        filters: {
          ...state.filters,
          discount: action.payload.discount
        }
      };
    }
    case types.CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: state.productsMinPrice,
          maxPrice: state.productsMaxPrice,
          discount: 0,
        }
      };
    }
    case productsTypes.FETCH_PRODUCTS_SUCCESS: {
      const products = action.payload.products;
      const allProductsCategories = products.map(item => item.category);
      const productsCategories = [...new Set(allProductsCategories)];

      const minPrice = minBy(obj => obj.price, products).price;
      const maxPrice = maxBy(obj => obj.price, products).price;

      return {
        ...state,
        filters: {
          ...state.filters,
          minPrice: minPrice,
          maxPrice: maxPrice
        },
        allCategories: productsCategories,
        productsMinPrice: minPrice,
        productsMaxPrice: maxPrice
      };
    }
    default: {
      return state;
    }
  }
}

export const getFilters = (state) => state.filters.filters;
export const getAllCategories = (state) => state.filters.allCategories;

export const getUrlSearchParams = (state) => {
  return queryString.parse(state.router.location.search);
}

export const getCategories = createSelector(
  [getUrlSearchParams],
  (params) => {
    const categoriesParam = params.categories;
    if (categoriesParam === '') {
      return [];
    }
    if (!categoriesParam) {
      return null;
    }

    const categories = categoriesParam.split(',');
    return categories;
  }
);

