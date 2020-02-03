import * as types from './actionTypes';

export const goToPage = (page) => {
  return {
    type: types.GO_TO_PAGE,
    payload: {
      page
    },
  };
};
