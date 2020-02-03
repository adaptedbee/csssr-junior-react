import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter.js';

import { updatePrice, updateDiscount, updateCategories, clearFilters } from '../store/actions';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    allCategories: state.allCategories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersFunctions: {
      updatePriceFilter: (minPrice, maxPrice) => dispatch(updatePrice(minPrice, maxPrice)),
      updateDiscount: (discount) => dispatch(updateDiscount(discount)),
      updateCategories: (category) => dispatch(updateCategories(category)),
      clearFilters: () => dispatch(clearFilters())
    }
  };
};

const FilterContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Filter);

export default FilterContainer;
