import React from 'react';

import './Filter.css';
import Headline from '../Headline/Headline.js';
import products from '../../products.json';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    const productsPrices = products.map(item => item.price);
    this.state = {
      minPrice: Math.min(...productsPrices),
      maxPrice: Math.max(...productsPrices)
    };
  }

  render() {
    return <form className="filter-form">
      <Headline
        size={3}
      >
        Цена
      </Headline>
      <div className="filter-form__price-range-wrapper">
        <label 
          className="filter-form__label" 
          htmlFor="from-price"
        >
          от
        </label>
        <input 
          className="filter-form__text-input filter-form__text-input--price" 
          id="from-price" 
          type="text"
          defaultValue={this.state.minPrice}
        />
        <label 
          className="filter-form__label" 
          htmlFor="to-price"
        >
          до
        </label>
        <input 
          className="filter-form__text-input filter-form__text-input--price" 
          id="to-price" 
          type="text"
          defaultValue={this.state.maxPrice}
        />
      </div>
      <button 
        className="filter-form__button"
        type="button"
      >
        Применить
      </button>
    </form>;
  }
}

export default Filter;
