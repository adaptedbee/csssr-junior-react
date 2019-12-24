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
    const allProductsCategories = products.map(item => item.category);
    const productsCategories = [...new Set(allProductsCategories)];

    this.state = {
      minPrice: Math.min(...productsPrices),
      maxPrice: Math.max(...productsPrices),
      discount: 0,
      categories: productsCategories,
      allCategories: productsCategories
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

  updateCategories = (category) => {
    let updatedCategories = [...this.state.categories];
    const categoryIndex = this.state.categories.indexOf(category);
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }

    this.setState({
      categories: updatedCategories
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
              categories={this.state.categories}
              allCategories={this.state.allCategories}
              updateCategories={this.updateCategories}
            />
          </div>
          <div className="container__center">
            <ProductsList 
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              discount={this.state.discount}
              categories={this.state.categories}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
