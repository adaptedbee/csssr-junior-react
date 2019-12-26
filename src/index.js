import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Headline from './components/Headline/Headline.js';
import ProductsList from './components/ProductsList/ProductsList.js';
import Filter from './components/Filter/Filter.js';
import products from './products.json';
import FiltersContext from './filters-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    const productsPrices = products.map(item => item.price);
    const allProductsCategories = products.map(item => item.category);
    const productsCategories = [...new Set(allProductsCategories)];

    this.state = {
      filters: {
        minPrice: Math.min(...productsPrices),
        maxPrice: Math.max(...productsPrices),
        discount: 0,
        categories: productsCategories,
      },
      allCategories: productsCategories
    };
  }

  updatePriceFilter = (minPrice, maxPrice) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        minPrice: minPrice,
        maxPrice: maxPrice
      }
    }));
  }

  updateDiscount = (discount) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        discount: discount
      }
    }));
  }

  updateCategories = (category) => {
    let updatedCategories = [...this.state.filters.categories];
    const categoryIndex = this.state.filters.categories.indexOf(category);
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }

    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        categories: updatedCategories
      }
    }));
  }

  clearFilters = () => {
    const productsPrices = products.map(item => item.price);

    this.setState({
      filters: {
        minPrice: Math.min(...productsPrices),
        maxPrice: Math.max(...productsPrices),
        discount: 0,
        categories: this.state.allCategories
      }
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
            <FiltersContext.Provider value={this.state.filters}>
              <Filter 
                updatePriceFilter={this.updatePriceFilter}
                updateDiscount={this.updateDiscount}
                allCategories={this.state.allCategories}
                updateCategories={this.updateCategories}
                clearFilters={this.clearFilters}
              />
            </FiltersContext.Provider>
          </div>
          <div className="container__center">
            <ProductsList 
              minPrice={this.state.filters.minPrice}
              maxPrice={this.state.filters.maxPrice}
              discount={this.state.filters.discount}
              categories={this.state.filters.categories}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
