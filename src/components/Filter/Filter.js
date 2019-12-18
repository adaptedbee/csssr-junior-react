import React from 'react';
import PropTypes from 'prop-types';
import Discount from 'csssr-school-input-discount';

import './Filter.css';
import LogRender from '../LogRender/LogRender.js';
import Headline from '../Headline/Headline.js';
import InputNumber from '../InputNumber/InputNumber.js';
import withInputState from '../../hocs/withInputState.js';

const DiscountWithState = withInputState(Discount);

class Filter extends LogRender {
  handleMinPriceChange = (value) => {
    this.props.updatePriceFilter(value, this.props.maxPrice);
  }
  handleMaxPriceChange = (value) => {
    this.props.updatePriceFilter(this.props.minPrice, value);
  }
  handleDiscountChange = (event) => {
    this.props.updateDiscount(Number(event.target.value));
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
            value={this.props.minPrice}
            onChange={this.handleMinPriceChange}
          />
          <label className="filter-form__label">до</label>
          <InputNumber 
            value={this.props.maxPrice}
            onChange={this.handleMaxPriceChange}
          />
        </div>
        <DiscountWithState
          title="Скидка"
          name="sale"
          value={this.props.discount}
          onChange={this.handleDiscountChange}
        />
      </form>
    );
  }
}

Filter.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  discount: PropTypes.number,
  updatePriceFilter: PropTypes.func,
  updateDiscount: PropTypes.func
};

export default Filter;
