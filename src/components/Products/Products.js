import React from 'react';

import ProductsList from '../ProductsList/ProductsList.js';
import products from '../../products.json';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent.js';

const renderProduct = item => {
  return <ProductItem
    key={item.id}
    isInStock={item.isInStock}
    img={item.img}
    title={item.title}
    price={item.price}
    subPriceContent={item.subPriceContent}
    maxRating={item.maxRating}
    rating={item.rating}
    ratingComponent={RatingComponent}
  />;
}

const PRODUCTS_LIMIT = 3;

const Products = props => {
  return <ProductsList 
    items={products} 
    renderItem={renderProduct} 
    limit={PRODUCTS_LIMIT} 
  />;
}

export default Products;
