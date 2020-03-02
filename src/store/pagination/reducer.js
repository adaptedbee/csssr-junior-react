import queryString from 'query-string';
import { createSelector } from 'reselect';

import { getFilteredProducts } from '../products/reducer';

const initialState = {
  productsPerPage: 3
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getCurrentPage = (state) => {
  const params = queryString.parse(state.router.location.search);
  const pageParam = params.page;
  if (!pageParam) {
    return 1;
  }
  const currentPage = parseInt(pageParam, 10);

  return currentPage;
}

export const getProductsPerPage = (state) => state.pagination.productsPerPage;

export const getProductsOnPage = createSelector(
  [getCurrentPage, getProductsPerPage, getFilteredProducts],
  (currentPage, productsPerPage, filteredProducts) => {
    const startPosition = productsPerPage*(currentPage - 1);
    const endPosition = startPosition + productsPerPage;
    const productsOnPage = filteredProducts.slice(startPosition, endPosition);

    return productsOnPage;
  }
);