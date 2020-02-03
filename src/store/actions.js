import * as types from './actionTypes';

export const updatePrice = (minPrice, maxPrice) => {
  return {
    type: types.UPDATE_PRICE,
    payload: {
      minPrice,
      maxPrice,
    },
  };
};

export const updateDiscount = (discount) => {
  return {
    type: types.UPDATE_DISCOUNT,
    payload: {
      discount
    },
  };
};

export const updateCategories = (category) => {
  return {
    type: types.UPDATE_CATEGORIES,
    payload: {
      category
    },
  };
};

export const clearFilters = () => {
  return {
    type: types.CLEAR_FILTERS,
    payload: {},
  };
};

export const goToPage = (page) => {
  return {
    type: types.GO_TO_PAGE,
    payload: {
      page
    },
  };
};
