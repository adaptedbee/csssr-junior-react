import React from 'react';
import Discount from 'csssr-school-input-discount';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import './Filter.css';
import LogRender from '../LogRender/LogRender.js';
import Headline from '../Headline/Headline.js';
import InputNumber from '../InputNumber/InputNumber.js';
import withInputState from '../../hocs/withInputState.js';

const DiscountWithState = withInputState(Discount);

class Filter extends LogRender {
  handleMinPriceChange = (value) => {
    this.props.filtersFunctions.updatePriceFilter(value, this.props.filters.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.filtersFunctions.updatePriceFilter(this.props.filters.minPrice, value);
  }
  handleDiscountChange = (value) => {
    this.props.filtersFunctions.updateDiscount(value);
  }
  clearFilters = () => {
    this.props.filtersFunctions.clearFilters();
  }

  getLinkToCategory = (category) => {
    const currentCategories = this.props.categories || [];
    let updatedCategories = [...currentCategories];
    const categoryIndex = currentCategories.indexOf(category);
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }
    const updatedCategoriesValue = updatedCategories.join(',');
    
    return {
      search: queryString.stringify({
        ...this.props.urlSearchParams, 
        page: 1,
        categories: updatedCategoriesValue
      })
    };
  }

  render() {
    return (
      <form className="filter-form">
        <div className="filter-form__section">
          <Headline size={3}>
            Цена
          </Headline>
          <div className="filter-form__price-range-wrapper">
            <label className="filter-form__label">от</label>
            <InputNumber 
              value={this.props.filters.minPrice}
              onChange={this.handleMinPriceChange}
            />
            <label className="filter-form__label">до</label>
            <InputNumber 
              value={this.props.filters.maxPrice}
              onChange={this.handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="filter-form__section">
          <DiscountWithState
            title="Скидка"
            name="sale"
            value={this.props.filters.discount}
            onChange={this.handleDiscountChange}
          />
        </div>
        <div className="filter-form__section">
          <Headline size={3}>
            Категории
          </Headline>
          <div className="filter-form__checkbox-labels">
            {this.props.allCategories.map((category, index) => 
              <Link 
                key={index}
                to={this.getLinkToCategory(category)}
                className={this.props.categories && this.props.categories.includes(category) ? 'filter-form__checkbox-link filter-form__checkbox-link--checked' : 'filter-form__checkbox-link'} 
              >
                {category}
              </Link>
            )}
          </div>
        </div>
        <Link 
          to="/"
          onClick={this.clearFilters}
          className="filter-form__button filter-form__button--secondary"
        >
          Сбросить фильтры
        </Link>
      </form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.object,
  allCategories: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string),
  filtersFunctions: PropTypes.objectOf(PropTypes.func),
  urlSearchParams: PropTypes.object
};

const FilterWithRouter = withRouter(Filter);

export default FilterWithRouter;
