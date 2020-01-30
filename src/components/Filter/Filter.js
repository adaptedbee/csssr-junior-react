import React from 'react';
import Discount from 'csssr-school-input-discount';
import PropTypes from 'prop-types';

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
  handleCategoryChange = (event) => {
    this.props.filtersFunctions.updateCategories(event.target.value);
  }
  clearFilters = () => {
    this.props.filtersFunctions.clearFilters();
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
              <React.Fragment key={index}>
                <input 
                  id={category} type="checkbox" value={category}
                  checked={this.props.filters.categories.includes(category)}
                  onChange={this.handleCategoryChange}
                  className="visually-hidden filter-form__checkbox" />
                <label htmlFor={category} className="filter-form__checkbox-label">
                  {category}
                </label>
              </React.Fragment>
            )}
          </div>
        </div>
        <button 
          onClick={this.clearFilters} type="button" 
          className="filter-form__button filter-form__button--secondary"
        >
          Сбросить фильтры
        </button>
      </form>
    );
  }
}

Filter.propTypes = {
  filters: PropTypes.object,
  allCategories: PropTypes.arrayOf(PropTypes.string),
  filtersFunctions: PropTypes.objectOf(PropTypes.func)
};

export default Filter;
