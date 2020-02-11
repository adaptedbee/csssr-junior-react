import { createStore, combineReducers } from 'redux';

import filtersReducer from './filters/reducer.js';
import paginationReducer from './pagination/reducer.js';
import productsReducer from './products/reducer.js';

export const store = createStore(combineReducers({
  filters: filtersReducer,
  pagination: paginationReducer,
  products: productsReducer
}));
