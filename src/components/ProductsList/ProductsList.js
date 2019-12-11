import React from 'react';

import List from '../List/List.js';
import products from '../../products.json';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent.js';

const renderProduct = item => {
  return <ProductItem
    key={item.id}
    isInStock={item.isInStock}
    img={item.img}
    title={item.title}
    price={item.price + ' ₽'}
    subPriceContent={item.subPriceContent}
    maxRating={item.maxRating}
    rating={item.rating}
    ratingComponent={RatingComponent}
  />;
}

const ProductsList = props => {
  return <List 
    items={products} 
    renderItem={renderProduct} 
  />;
}

export default ProductsList;
