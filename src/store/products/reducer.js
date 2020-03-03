import { createSelector } from 'reselect';

import products from '../../products.json';
import { getFilters, getCategories } from '../filters/reducer';

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
  [getFilters, getProducts, getCategories],
  (filters, products, categories) => {
    const filteredProducts = products
      .filter(item => item.price >= filters.minPrice && item.price <= filters.maxPrice)
      .filter(item => filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= filters.discount/100))
      .filter(item => {
        if (categories && categories.length > 0) {
          return categories.includes(item.category);
        } else {
          return true;
        }
      });
  
    return filteredProducts;
  }
);
