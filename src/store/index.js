import { createStore } from "redux";
import { filtersReducer } from './reducers.js';

import products from '../products.json';
import { minBy, maxBy } from 'csssr-school-utils';

const allProductsCategories = products.map(item => item.category);
const productsCategories = [...new Set(allProductsCategories)];

const initialState = {
  filters: {
    minPrice: minBy(obj => obj.price, products).price,
    maxPrice: maxBy(obj => obj.price, products).price,
    discount: 0,
    categories: productsCategories,
  },
  allCategories: productsCategories,
  currentPage: 1,
  productsPerPage: 3
};

export const store = createStore(filtersReducer, initialState);
