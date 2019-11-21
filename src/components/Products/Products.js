import React from 'react';

import products from '../../products.json';
import './Products.css';
import ProductItem from 'csssr-school-product-card';

const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled ? "starFill" : ""} />;
};

const PRODUCTS_LIMIT = 3;

const Products = props => {
  return <ul className="products">
    {products.slice(0, PRODUCTS_LIMIT).map((item, index) => 
      <ProductItem
        key={item.id}
        isInStock={item.isInStock}
        img={item.img}
        title={item.title}
        price={item.price}
        subPriceContent={item.subPriceContent}
        maxRating={item.maxRating}
        rating={item.rating}
        ratingComponent={ratingComponent}
      />
    )}
  </ul>;
}

export default Products;
