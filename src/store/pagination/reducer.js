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

export const getProductsPerPage = (state) => state.pagination.productsPerPage;
