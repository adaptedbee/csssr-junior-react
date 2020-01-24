import React from 'react';

import FiltersContext from '../filters-context';
import { store } from '../store';
import ProductsList from '../components/ProductsList/ProductsList.js';

const ProductsListContainer = () => {
  return (
    <FiltersContext.Provider value={{
      filters: store.getState().filters
    }}>
      <ProductsList />
    </FiltersContext.Provider>
  );
}

export default ProductsListContainer;

