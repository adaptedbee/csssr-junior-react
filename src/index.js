import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import { store, history } from './store';
import HomePage from './pages/HomePage/HomePage';
import ProductPageContainer from './containers/ProductPageContainer';

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPageContainer} />
      </ConnectedRouter>
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
