import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Headline from './components/Headline/Headline.js';
import ProductsList from './components/ProductsList/ProductsList.js';
import Filter from './components/Filter/Filter.js';
import products from './products.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    const productsPrices = products.map(item => item.price);
    this.state = {
      minPrice: Math.min(...productsPrices),
      maxPrice: Math.max(...productsPrices),
      discount: 0
    };
  }

  updatePriceFilter = (minPrice, maxPrice) => {
    this.setState({
      minPrice: minPrice,
      maxPrice: maxPrice
    });
  }

  updateDiscount = (discount) => {
    this.setState({
      discount: discount
    });
  }

  render() {
    return (
      <React.Fragment>
        <Headline size={1}>
          Список товаров
        </Headline>
        <div className="container">
          <div className="container__left">
            <Filter 
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              updatePriceFilter={this.updatePriceFilter}
              discount={this.state.discount}
              updateDiscount={this.updateDiscount}
            />
          </div>
          <div className="container__center">
            <ProductsList 
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
