import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';

import './Filter.css';
import LogRender from '../LogRender/LogRender.js';
import Headline from '../Headline/Headline.js';
import InputNumber from '../InputNumber/InputNumber.js';
import withInputState from '../../hocs/withInputState.js';
import FiltersContext from '../../filters-context';

const DiscountWithState = withInputState(Discount);

class Filter extends LogRender {
  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }
  handleDiscountChange = (value) => {
    this.props.updateDiscount(value);
  }
  handleCategoryChange = (event) => {
    this.props.updateCategories(event.target.value);
  }
  clearFilters = () => {
    this.props.clearFilters();
  }

  render() {
    return (
      <FiltersContext.Consumer>
        {value => (
          <form className="filter-form">
            <div className="filter-form__section">
              <Headline size={3}>
                Цена
              </Headline>
              <div className="filter-form__price-range-wrapper">
                <label className="filter-form__label">от</label>
                <InputNumber 
                  value={value.minPrice}
                  onChange={this.handleMinPriceChange}
                />
                <label className="filter-form__label">до</label>
                <InputNumber 
                  value={value.maxPrice}
                  onChange={this.handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="filter-form__section">
              <DiscountWithState
                title="Скидка"
                name="sale"
                value={value.discount}
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
                      defaultChecked={value.categories.includes(category)}
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
        )}
      </FiltersContext.Consumer>
    );
  }
}

Filter.propTypes = {
  updatePriceFilter: PropTypes.func,
  updateDiscount: PropTypes.func,
  allCategories: PropTypes.arrayOf(PropTypes.string),
  updateCategories: PropTypes.func,
  clearFilters: PropTypes.func
};

export default Filter;
