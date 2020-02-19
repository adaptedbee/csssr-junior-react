import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import { store, history } from './store';
import HomePage from './components/HomePage/HomePage';
import ProductPageContainer from './containers/ProductPageContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPageContainer} />
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement
);
