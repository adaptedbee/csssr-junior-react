import React from 'react';
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
    this.context.filtersFunctions.updatePriceFilter(value, this.context.filters.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.context.filtersFunctions.updatePriceFilter(this.context.filters.minPrice, value);
  }
  handleDiscountChange = (value) => {
    this.context.filtersFunctions.updateDiscount(value);
  }
  handleCategoryChange = (event) => {
    this.context.filtersFunctions.updateCategories(event.target.value);
  }
  clearFilters = () => {
    this.context.filtersFunctions.clearFilters();
  }

  render() {
    return (
      <FiltersContext.Consumer>
        {context => (
          <form className="filter-form">
            <div className="filter-form__section">
              <Headline size={3}>
                Цена
              </Headline>
              <div className="filter-form__price-range-wrapper">
                <label className="filter-form__label">от</label>
                <InputNumber 
                  value={context.filters.minPrice}
                  onChange={this.handleMinPriceChange}
                />
                <label className="filter-form__label">до</label>
                <InputNumber 
                  value={context.filters.maxPrice}
                  onChange={this.handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="filter-form__section">
              <DiscountWithState
                title="Скидка"
                name="sale"
                value={context.filters.discount}
                onChange={this.handleDiscountChange}
              />
            </div>
            <div className="filter-form__section">
              <Headline size={3}>
                Категории
              </Headline>
              <div className="filter-form__checkbox-labels">
                {context.allCategories.map((category, index) => 
                  <React.Fragment key={index}>
                    <input 
                      id={category} type="checkbox" value={category}
                      defaultChecked={context.filters.categories.includes(category)}
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

Filter.contextType = FiltersContext;

export default Filter;
