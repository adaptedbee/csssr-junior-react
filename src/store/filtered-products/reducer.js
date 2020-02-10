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

export const getFilteredProducts = (state) => {
  const filters = getFilters(state);

  const filteredProducts = state.products.products
    .filter(item => item.price >= filters.minPrice && item.price <= filters.maxPrice)
    .filter(item => filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= filters.discount/100))
    .filter(item => filters.categories.includes(item.category));
  
  return filteredProducts;
};
