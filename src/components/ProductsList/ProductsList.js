import React from 'react';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import products from '../../products.json';
import ProductCard from '../ProductCard/ProductCard.js';
import FiltersContext from '../../filters-context';

class ProductsList extends LogRender {
  render() {
    const filteredProducts = products
      .filter(item => item.price >= this.context.filters.minPrice && item.price <= this.context.filters.maxPrice)
      .filter(item => this.context.filters.discount === 0 || (item.oldPrice && (item.oldPrice/item.price) - 1 >= this.context.filters.discount/100))
      .filter(item => this.context.filters.categories.includes(item.category));

    return (
      <List items={filteredProducts} renderItem={ProductCard} />
    );
  }
}

ProductsList.contextType = FiltersContext;

export default ProductsList;
