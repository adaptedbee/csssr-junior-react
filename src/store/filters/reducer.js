import { minBy, maxBy } from 'csssr-school-utils';
import queryString from 'query-string';
import { createSelector } from 'reselect';

import products from '../../products.json';
import * as types from './actionTypes';

const allProductsCategories = products.map(item => item.category);
const productsCategories = [...new Set(allProductsCategories)];
const initialState = {
  filters: {
    minPrice: minBy(obj => obj.price, products).price,
    maxPrice: maxBy(obj => obj.price, products).price,
    discount: 0,
  },
  allCategories: productsCategories,
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PRICE: {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          minPrice: action.payload.minPrice,
          maxPrice: action.payload.maxPrice
        }
      });
    }
    case types.UPDATE_DISCOUNT: {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          discount: action.payload.discount
        }
      });
    }
    case types.CLEAR_FILTERS: {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          minPrice: minBy(obj => obj.price, products).price,
          maxPrice: maxBy(obj => obj.price, products).price,
          discount: 0,
        }
      });
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

