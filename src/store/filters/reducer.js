import { minBy, maxBy } from 'csssr-school-utils';

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
          // categories: state.allCategories
        }
      });

      // const url = this.state.allCategories.join(',');
      // window.history.replaceState({ url }, 'title', url);
    }
    default: {
      return state;
    }
  }
}

export const getFilters = (state) => state.filters.filters;
export const getAllCategories = (state) => state.filters.allCategories;
