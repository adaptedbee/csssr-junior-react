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

export const getCurrentPage = (state) => state.pagination.currentPage;
export const getProductsPerPage = (state) => state.pagination.productsPerPage;
