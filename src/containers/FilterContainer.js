import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter.js';

import { updatePrice, updateDiscount, clearFilters } from '../store/filters/actions';
import { getFilters, getAllCategories, getCategories, getUrlSearchParams } from '../store/filters/reducer';

const mapStateToProps = (state) => {
  return {
    filters: getFilters(state),
    allCategories: getAllCategories(state),
    categories: getCategories(state),
    urlSearchParams: getUrlSearchParams(state)
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
