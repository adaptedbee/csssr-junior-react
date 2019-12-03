import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Headline from './components/Headline/Headline.js';
import ProductsList from './components/ProductsList/ProductsList.js';

function App() {
  return (
    <React.Fragment>
      <Headline
        size={1}
      >
        Список товаров
      </Headline>
      <ProductsList />
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
