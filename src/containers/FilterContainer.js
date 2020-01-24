import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter.js';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    allCategories: state.allCategories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersFunctions: {
      updatePriceFilter: (minPrice, maxPrice) => dispatch({
        type: "UPDATE_PRICE",
        data: {
          minPrice: minPrice,
          maxPrice: maxPrice
        }
      }),
      updateDiscount: (discount) => dispatch({
        type: "UPDATE_DISCOUNT",
        data: {
          discount: discount
        }
      }),
      updateCategories: (category) => dispatch({
        type: "UPDATE_CATEGORIES",
        data: {
          category: category
        }
      }),
      clearFilters: () => dispatch({
        type: "CLEAR_FILTERS"
      })
    }
  };
};

const FilterContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Filter);

export default FilterContainer;
