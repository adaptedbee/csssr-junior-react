import React from 'react';
import PropTypes from 'prop-types';

import './Filter.css';
import LogRender from '../LogRender/LogRender.js';
import Headline from '../Headline/Headline.js';
import InputNumber from '../InputNumber/InputNumber.js';

class Filter extends LogRender {
  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }

  render() {
    return (
      <form className="filter-form">
        <Headline size={3}>
          Цена
        </Headline>
        <div className="filter-form__price-range-wrapper">
          <label className="filter-form__label">от</label>
          <InputNumber 
            defaultValue={this.props.minPrice}
            onPriceChange={this.handleMinPriceChange}
          />
          <label className="filter-form__label">до</label>
          <InputNumber 
            defaultValue={this.props.maxPrice}
            onPriceChange={this.handleMaxPriceChange}
          />
        </div>
        {/* <button type="submit" className="filter-form__button">
          Применить
        </button> */}
      </form>
    );
  }
}

Filter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  updatePriceFilter: PropTypes.func
};

export default Filter;
