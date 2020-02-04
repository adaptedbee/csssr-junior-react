import * as types from './actionTypes';

const initialState = {
  currentPage: 1,
  productsPerPage: 3
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
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

export const getFilters = (moduleState) => moduleState.filters;
export const getCurrentPage = (moduleState) => moduleState.currentPage;
export const getProductsPerPage = (moduleState) => moduleState.productsPerPage;
