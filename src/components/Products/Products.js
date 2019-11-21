import React from 'react';

import products from '../../products.json';
import './Products.css';

const PRODUCTS_LIMIT = 3;

const Products = props => {
  return <ul className="products">
  {products.slice(0, PRODUCTS_LIMIT).map((item, index) => <li key={item.id}>{item.name}</li>)}
</ul>;
}

export default Products;
