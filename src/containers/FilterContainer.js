import React from 'react';

import FiltersContext from '../filters-context';
import { store } from '../store';
import Filter from '../components/Filter/Filter.js';

const FilterContainer = () => {
  return (
    <FiltersContext.Provider value={{
      filters: store.getState().filters,
      allCategories: store.getState().allCategories,
      filtersFunctions: {
        updatePriceFilter: (minPrice, maxPrice) => store.dispatch({
          type: "UPDATE_PRICE",
          data: {
            minPrice: minPrice,
            maxPrice: maxPrice
          }
        }),
        updateDiscount: (discount) => store.dispatch({
          type: "UPDATE_DISCOUNT",
          data: {
            discount: discount
          }
        }),
        updateCategories: (category) => store.dispatch({
          type: "UPDATE_CATEGORIES",
          data: {
            category: category
          }
        }),
        clearFilters: () => store.dispatch({
          type: "CLEAR_FILTERS"
        })
      }
    }}>
      <Filter />
    </FiltersContext.Provider>
  );
}

export default FilterContainer;
