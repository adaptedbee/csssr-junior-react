import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import filtersReducer from './filters/reducer.js';
import paginationReducer from './pagination/reducer.js';
import productsReducer from './products/reducer.js';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combineReducers({
  filters: filtersReducer,
  pagination: paginationReducer,
  products: productsReducer,
  router: connectRouter(history),
}), composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunk
  ))
);
