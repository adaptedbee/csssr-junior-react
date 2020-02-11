import { createSelector } from 'reselect';

import products from '../../products.json';
import { getFilters } from '../filters/reducer';
import { getCurrentPage, getProductsPerPage } from '../pagination/reducer';

const initialState = {
  products: products
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getProducts = (state) => state.products.products;

export const getFilteredProducts = createSelector(
  [getFilters, getProducts],
  (filters, products) => {
    const filteredProducts = products
      .filter(item => item.price >= filters.minPrice && item.price <= filters.maxPrice)
      .filter(item => filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= filters.discount/100))
      .filter(item => filters.categories.includes(item.category));
  
    return filteredProducts;
  }
);

export const getProductsOnPage = createSelector(
  [getCurrentPage, getProductsPerPage, getFilteredProducts],
  (currentPage, productsPerPage, filteredProducts) => {
    const startPosition = productsPerPage*(currentPage - 1);
    const endPosition = startPosition + productsPerPage;
    const productsOnPage = filteredProducts.slice(startPosition, endPosition);
  
    return productsOnPage;
  }
);
