import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import './Pagination.css';

class Pagination extends React.Component {
  getPagesCount = () => {
    return Math.ceil(this.props.productsCount/this.props.productsPerPage);
  }

  getLinkToPage = (page) => {
    return {
      search: queryString.stringify({
        ...queryString.parse(this.props.location.search), 
        page: page
      })
    };
  }

  render() {
    return (
      <ul className="pagination"> 
        {this.props.currentPage > 1 ? (
          <li className="pagination__item pagination__item--prev">
            <Link 
              to={this.getLinkToPage(this.props.currentPage - 1)}
              className="pagination__button"
            >
              Назад
            </Link>
          </li>
        ) : ''}

        {this.props.currentPage > 1 ? (
          <li className="pagination__item">
            <Link 
              to={this.getLinkToPage(this.props.currentPage - 1)}
              className="pagination__button"
            >
              {this.props.currentPage - 1}
            </Link>
          </li>
        ) : ''}
        <li className="pagination__item">
          <Link 
            to={this.getLinkToPage(this.props.currentPage)}
            className="pagination__button pagination__button--active">
            {this.props.currentPage}
          </Link>
        </li>
        {this.props.currentPage < this.getPagesCount() ? (
          <li className="pagination__item">
            <Link 
              to={this.getLinkToPage(this.props.currentPage + 1)}
              className="pagination__button"
            >
              {this.props.currentPage + 1}
            </Link>
          </li>
        ) : ''}
        
        {this.props.currentPage < this.getPagesCount() - 2 ? (
          <li className="pagination__item">
            <Link 
              to={this.getLinkToPage(this.props.currentPage + 2)}
              className="pagination__button"
            >
              ...
            </Link>
          </li>
        ) : ''}
        {this.props.currentPage < this.getPagesCount() - 1 ? (
          <li className="pagination__item">
            <Link 
              to={this.getLinkToPage(this.getPagesCount())}
              className="pagination__button"
            >
              {this.getPagesCount()}
            </Link>
          </li>
        ) : ''}
  
        {this.props.currentPage < this.getPagesCount() ? (
          <li className="pagination__item pagination__item--next">
            <Link 
              to={this.getLinkToPage(this.props.currentPage + 1)}
              className="pagination__button"
            >
              Вперёд
            </Link>
          </li>
        ) : ''}
      </ul>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  productsPerPage: PropTypes.number,
  productsCount: PropTypes.number,
  location: PropTypes.object,
  history: PropTypes.object
};

const PaginationWithRouter = withRouter(Pagination);

export default PaginationWithRouter;
