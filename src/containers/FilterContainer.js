import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter.js';

import { updatePrice, updateDiscount, updateCategories, clearFilters } from '../store/filters/actions';
import { getFilters, getAllCategories } from '../store/filters/reducer';

const mapStateToProps = ({filters}) => {
  return {
    filters: getFilters(filters),
    allCategories: getAllCategories(filters)
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
