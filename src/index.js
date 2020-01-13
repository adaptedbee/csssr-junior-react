import React from 'react';
import ReactDOM from 'react-dom';
import { minBy, maxBy } from 'csssr-school-utils';

import './index.css';
import Headline from './components/Headline/Headline.js';
import ProductsList from './components/ProductsList/ProductsList.js';
import Filter from './components/Filter/Filter.js';
import products from './products.json';
import FiltersContext from './filters-context';

class App extends React.Component {
  constructor(props) {
    super(props);

    const allProductsCategories = products.map(item => item.category);
    const productsCategories = [...new Set(allProductsCategories)];

    const url = productsCategories.join(',');
    window.history.replaceState({ url }, 'title', url);

    this.state = {
      filters: {
        minPrice: minBy(obj => obj.price, products).price,
        maxPrice: maxBy(obj => obj.price, products).price,
        discount: 0,
        categories: productsCategories,
      },
      allCategories: productsCategories
    };
  }

  componentDidMount() {
    window.addEventListener('popstate', this.setFromHistory);
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.setFromHistory);
  }
  
  setFromHistory = (event) => {
    const categoriesFromUrl = event.state['url'].split(',');

    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        categories: categoriesFromUrl
      }
    }));
  };

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

    const url = updatedCategories.join(',');
    window.history.pushState({ url }, 'title', url);
  }

  clearFilters = () => {
    this.setState({
      filters: {
        minPrice: minBy(obj => obj.price, products).price,
        maxPrice: maxBy(obj => obj.price, products).price,
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
