import React from 'react';
import ProductItem from 'csssr-school-product-card';
import { formatMoney } from 'csssr-school-utils';

import LogRender from '../LogRender/LogRender.js';
import List from '../List/List.js';
import RatingComponent from '../RatingComponent/RatingComponent.js';
import products from '../../products.json';
import FiltersContext from '../../filters-context';

class ProductCard extends LogRender {
  formatPrice = (number) => {
    return formatMoney(number, 0, '.', ' ') + ' ₽';
  }

  render() {
    const item = this.context.item;

    return (
      <ProductItem
        key={item.id}
        isInStock={item.isInStock}
        img={item.img}
        title={item.title}
        price={this.formatPrice(item.price)}
        subPriceContent={item.oldPrice ? this.formatPrice(item.oldPrice) : ''}
        maxRating={item.maxRating}
        rating={item.rating}
        ratingComponent={RatingComponent}
      />
    );
  }
}

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
