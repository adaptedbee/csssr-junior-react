import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import './Pagination.css';

class Pagination extends React.Component {
  componentDidMount() {
    this.props.history.push('/?page=1');
  }

  getPagesCount = () => {
    return Math.ceil(this.props.productsCount/this.props.productsPerPage);
  }

  goToPage = (event, page) => {
    if (page <= 0 || page > this.getPagesCount()) {
      event.preventDefault();
      return;
    }
  }

  render() {
    const params = queryString.parse(this.props.location.search);
    const pageParam = params.page;
    const currentPage = parseInt(pageParam, 10);

    return (
      <ul className="pagination"> 
        <li className="pagination__item pagination__item--prev">
          <Link 
            to={{search: `?page=${currentPage - 1}`}}
            onClick={(event) => this.goToPage(event, currentPage - 1)}
            className="pagination__button"
          >
            Назад
          </Link>
        </li>

        {currentPage > 1 ? (
          <li className="pagination__item">
            <Link 
              to={{search: `?page=${currentPage - 1}`}}
              onClick={(event) => this.goToPage(event, currentPage - 1)}
              className="pagination__button"
            >
              {currentPage - 1}
            </Link>
          </li>
        ) : ''}
        <li className="pagination__item">
          <Link 
            to={{search: `?page=${currentPage}`}}
            className="pagination__button pagination__button--active">
            {currentPage}
          </Link>
        </li>
        {currentPage < this.getPagesCount() ? (
          <li className="pagination__item">
            <Link 
              to={{search: `?page=${currentPage + 1}`}}
              onClick={(event) => this.goToPage(event, currentPage + 1)}
              className="pagination__button"
            >
              {currentPage + 1}
            </Link>
          </li>
        ) : ''}
        
        {currentPage < this.getPagesCount() - 2 ? (
          <li className="pagination__item">
            <Link 
              to={{search: `?page=${currentPage + 2}`}}
              onClick={(event) => this.goToPage(event, currentPage + 2)}
              className="pagination__button"
            >
              ...
            </Link>
          </li>
        ) : ''}
        {currentPage < this.getPagesCount() - 1 ? (
          <li className="pagination__item">
            <Link 
              to={{search: `?page=${this.getPagesCount()}`}}
              onClick={(event) => this.goToPage(event, this.getPagesCount())}
              className="pagination__button"
            >
              {this.getPagesCount()}
            </Link>
          </li>
        ) : ''}
  
        <li className="pagination__item pagination__item--next">
          <Link 
            to={{search: `?page=${currentPage + 1}`}}
            onClick={(event) => this.goToPage(event, currentPage + 1)}
            className="pagination__button"
          >
            Вперёд
          </Link>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  productsPerPage: PropTypes.number,
  productsCount: PropTypes.number,
  location: PropTypes.object,
  history: PropTypes.object
};

const PaginationWithRouter = withRouter(Pagination);

export default PaginationWithRouter;
