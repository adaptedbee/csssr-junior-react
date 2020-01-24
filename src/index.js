import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Headline from './components/Headline/Headline.js';
import products from './products.json';
import ProductsListContainer from './containers/ProductsListContainer.js';
import FilterContainer from './containers/FilterContainer.js';
import { store } from './store';

class App extends React.Component {
  constructor(props) {
    super(props);

    // const allProductsCategories = products.map(item => item.category);
    // const productsCategories = [...new Set(allProductsCategories)];

    // const url = productsCategories.join(',');
    // window.history.replaceState({ url }, 'title', url);

    // this.state = {
    //   filters: {
    //     minPrice: minBy(obj => obj.price, products).price,
    //     maxPrice: maxBy(obj => obj.price, products).price,
    //     discount: 0,
    //     categories: productsCategories,
    //   },
    //   allCategories: productsCategories
    // };
  }

  // componentDidMount() {
  //   window.addEventListener('popstate', this.setFromHistory);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('popstate', this.setFromHistory);
  // }
  
  // setFromHistory = (event) => {
  //   const categoriesFromUrl = event.state['url'].split(',');

  //   this.setState(prevState => ({
  //     filters: {
  //       ...prevState.filters,
  //       categories: categoriesFromUrl
  //     }
  //   }));
  // };

  render() {
    return (
      <React.Fragment>
        <Headline size={1}>
          Список товаров
        </Headline>
        <div className="container">
          <div className="container__left">
            <FilterContainer />
          </div>
          <div className="container__center">
            <ProductsListContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
