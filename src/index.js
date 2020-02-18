import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import { store } from './store';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';

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
      <BrowserRouter>
        <Route path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
      </BrowserRouter>
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
