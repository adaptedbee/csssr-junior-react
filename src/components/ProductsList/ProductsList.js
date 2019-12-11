import React from 'react';
import PropTypes from 'prop-types';

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

class ProductsList extends React.Component {
  render() {
    const filteredProducts = products.filter(item => item.price >= this.props.minPrice && item.price <= this.props.maxPrice);

    return (
      <List 
        items={filteredProducts} 
        renderItem={renderProduct} 
      />
    );
  }
}

ProductsList.propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number
};
export default ProductsList;
