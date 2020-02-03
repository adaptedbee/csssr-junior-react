import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

class Pagination extends React.Component {
  goToPage = (page) => {
    const pagesCount = Math.ceil(this.props.productsCount/this.props.productsPerPage);
    if (page <= 0 || page > pagesCount || page === this.props.currentPage) {
      return;
    }
    this.props.goToPage(page);
  }

  render() {
    return (
      <ul className="pagination"> 
        <li className="pagination__item pagination__item--prev">
          <button 
            onClick={() => this.goToPage(this.props.currentPage - 1)}
            className="pagination__button"
          >
            Назад
          </button>
        </li>
  
        <li className="pagination__item">
          <button
            className={"pagination__button " + (this.props.currentPage === 1 ? 'pagination__button--active' : '')}
          >
            1
          </button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">2</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">3</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">4</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">5</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">...</button>
        </li>
        <li className="pagination__item">
          <button className="pagination__button">13</button>
        </li>
  
        <li className="pagination__item pagination__item--next">
          <button 
            onClick={() => this.goToPage(this.props.currentPage + 1)}
            className="pagination__button"
          >
            Вперёд
          </button>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  productsPerPage: PropTypes.number,
  productsCount: PropTypes.number,
  goToPage: PropTypes.func
};

export default Pagination;
