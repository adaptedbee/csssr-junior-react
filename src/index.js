import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import products from './products.json';

function App() {
  const productsLimit = 3;

  function renderHeadline() {
    return <h1 className="headline">Список товаров</h1>;
  }
  function renderProducts() {
    return <ul className="products">
      {products.slice(0, productsLimit).map((item, index) => <li key={item.id}>{item.name}</li>)}
    </ul>;
  }

  return (
    <React.Fragment>
      {renderHeadline()}
      {renderProducts()}
    </React.Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
