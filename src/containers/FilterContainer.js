import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter.js';

import { updatePrice, updateDiscount, clearFilters } from '../store/filters/actions';
import { getFilters, getAllCategories } from '../store/filters/reducer';

const mapStateToProps = (state) => {
  return {
    filters: getFilters(state),
    allCategories: getAllCategories(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersFunctions: {
      updatePriceFilter: (minPrice, maxPrice) => dispatch(updatePrice(minPrice, maxPrice)),
      updateDiscount: (discount) => dispatch(updateDiscount(discount)),
      clearFilters: () => dispatch(clearFilters())
    }
  };
};

const FilterContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Filter);

export default FilterContainer;
