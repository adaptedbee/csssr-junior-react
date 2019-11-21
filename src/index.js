import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import products from './products.json';

function App() {
  const productsLimit = 3;

  return (
    <React.Fragment>
      <h1 className="headline">Список товаров</h1>
      <ul className="products">
      {products.slice(0, productsLimit).map((item, index) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
