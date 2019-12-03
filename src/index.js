import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Headline from './components/Headline/Headline.js';
import Products from './components/Products/Products.js';

function App() {
  return (
    <React.Fragment>
      <Headline
        size={1}
      >
        Список товаров
      </Headline>
      <Products />
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
