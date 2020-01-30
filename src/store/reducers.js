import { minBy, maxBy } from 'csssr-school-utils';

import products from '../products.json';

export function filtersReducer(state = {}, action) {
  switch (action.type) {
    case "UPDATE_PRICE": {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          minPrice: action.data.minPrice,
          maxPrice: action.data.maxPrice
        }
      });
    }
    case "UPDATE_DISCOUNT": {
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          discount: action.data.discount
        }
      });
    }
    case "UPDATE_CATEGORIES": {
      let updatedCategories = [...state.filters.categories];
      const categoryIndex = state.filters.categories.indexOf(action.data.category);
      if (categoryIndex !== -1) {
        updatedCategories.splice(categoryIndex, 1);
      } else {
        updatedCategories.push(action.data.category);
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
    case "CLEAR_FILTERS": {
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
    default: {
      return state;
    }
  }
}
