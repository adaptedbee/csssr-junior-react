import { createSelector } from 'reselect';
import queryString from 'query-string';

import products from '../../products.json';
import { getFilters } from '../filters/reducer';

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

// export const getLocation = (state) => state.router.location;
export const getCategories = (state) => {
  let categories = [];
  const params = queryString.parse(state.router.location.search);
  const categoriesParam = params.categories;
  if (categoriesParam) {
    categories = categoriesParam.split(',');
  }

  return categories;
}

export const getFilteredProducts = createSelector(
  [getFilters, getProducts, getCategories],
  (filters, products, categories) => {
    const filteredProducts = products
      .filter(item => item.price >= filters.minPrice && item.price <= filters.maxPrice)
      .filter(item => filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= filters.discount/100))
      .filter(item => categories.includes(item.category));
  
    return filteredProducts;
  }
);
