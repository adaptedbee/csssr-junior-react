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
  getCategoriesFromUrl = () => {
    const params = queryString.parse(this.props.location.search);
    const categoriesParam = params.categories;

    if (categoriesParam === '') {
      return [];
    }
    if (!categoriesParam) {
      return this.props.allCategories;
    }
    const categories = categoriesParam.split(',');
    return categories;
  }

  handleMinPriceChange = (value) => {
    this.props.filtersFunctions.updatePriceFilter(value, this.props.filters.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.filtersFunctions.updatePriceFilter(this.props.filters.minPrice, value);
  }
  handleDiscountChange = (value) => {
    this.props.filtersFunctions.updateDiscount(value);
  }
  handleCategoryChange = (event) => {
    const category = event.target.value;
    const currentCategories = this.getCategoriesFromUrl();
    let updatedCategories = [...currentCategories];
    const categoryIndex = currentCategories.indexOf(category);
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }

    let urlSearchObject = {...queryString.parse(this.props.location.search)};
    const updatedCategoriesValue = updatedCategories.join(',');
    urlSearchObject.categories = updatedCategoriesValue;

    this.props.history.push({
      search: queryString.stringify(urlSearchObject)
    });
  }
  clearFilters = () => {
    this.props.filtersFunctions.clearFilters();

    let url = new URL(window.location.href);
    const allCategoriesValue = this.props.allCategories.join(',');
    url.searchParams.set('categories', allCategoriesValue);
    this.props.history.push(url.search);
  }

  render() {
    const categories = this.getCategoriesFromUrl();
    
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
              <React.Fragment key={index}>
                <input 
                  id={category} type="checkbox" value={category}
                  checked={categories.includes(category)}
                  onChange={this.handleCategoryChange}
                  className="visually-hidden filter-form__checkbox" />
                <label htmlFor={category} className="filter-form__checkbox-label">
                  {category}
                </label>
              </React.Fragment>
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
  filtersFunctions: PropTypes.objectOf(PropTypes.func),
  location: PropTypes.object,
  history: PropTypes.object
};

const FilterWithRouter = withRouter(Filter);

export default FilterWithRouter;
