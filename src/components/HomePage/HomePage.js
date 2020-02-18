import React from 'react';

import './HomePage.css';
import Headline from '../Headline/Headline.js';
import ProductsListContainer from '../../containers/ProductsListContainer.js';
import FilterContainer from '../../containers/FilterContainer.js';

const HomePage = () => {
  return (
    <React.Fragment>
      <Headline size={1}>
        Список товаров
      </Headline>
      <div className="container">
        <div className="container__left">
          <FilterContainer />
        </div>
        <div className="container__center">
          <ProductsListContainer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
