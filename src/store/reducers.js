import { minBy, maxBy } from 'csssr-school-utils';

import products from '../products.json';
import * as types from './actionTypes';

export function filtersReducer(state = {}, action) {
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
    case types.UPDATE_CATEGORIES: {
      let updatedCategories = [...state.filters.categories];
      const categoryIndex = state.filters.categories.indexOf(action.payload.category);
      if (categoryIndex !== -1) {
        updatedCategories.splice(categoryIndex, 1);
      } else {
        updatedCategories.push(action.payload.category);
      }

      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          categories: updatedCategories
        }
      });

      // const url = updatedCategories.join(',');
      // window.history.pushState({ url }, 'title', url);
    }
    case types.CLEAR_FILTERS: {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          minPrice: minBy(obj => obj.price, products).price,
          maxPrice: maxBy(obj => obj.price, products).price,
          discount: 0,
          categories: state.allCategories
        }
      });

      // const url = this.state.allCategories.join(',');
      // window.history.replaceState({ url }, 'title', url);
    }
    case types.GO_TO_PAGE: {
      return Object.assign({}, state, {
        currentPage: action.payload.page
      });
    }
    default: {
      return state;
    }
  }
}
