import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    window.history.pushState({}, `page ${this.props.currentPage}`, `?page=${this.props.currentPage}`);
  }
  componentDidMount() {
    window.addEventListener('popstate', this.setPageFromHistory);
  }
  componentWillUnmount() {
    window.removeEventListener('popstate', this.setPageFromHistory);
  }

  setPageFromHistory = () => {
    const params = (new URL(document.location)).searchParams;
    const pageParam = params.get('page');
    const page = parseInt(pageParam, 10);

    this.goToPage(page);
  };

  getPagesCount = () => {
    return Math.ceil(this.props.productsCount/this.props.productsPerPage);
  }

  goToPage = (page) => {
    if (page <= 0 || page > this.getPagesCount() || page === this.props.currentPage) {
      return;
    }
    this.props.goToPage(page);
    window.history.pushState({}, `page ${page}`, `?page=${page}`);
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

        {this.props.currentPage > 1 ? (
          <li className="pagination__item">
            <button 
              onClick={() => this.goToPage(this.props.currentPage - 1)}
              className="pagination__button"
            >
              {this.props.currentPage - 1}
            </button>
          </li>
        ) : ''}
        <li className="pagination__item">
          <button className="pagination__button pagination__button--active">
            {this.props.currentPage}
          </button>
        </li>
        {this.props.currentPage < this.getPagesCount() ? (
          <li className="pagination__item">
            <button 
              className="pagination__button"
              onClick={() => this.goToPage(this.props.currentPage + 1)}
            >
              {this.props.currentPage + 1}
            </button>
          </li>
        ) : ''}
        
        {this.props.currentPage < this.getPagesCount() - 2 ? (
          <li className="pagination__item">
            <button 
              className="pagination__button"
              onClick={() => this.goToPage(this.props.currentPage + 2)}
            >
              ...
            </button>
          </li>
        ) : ''}
        {this.props.currentPage < this.getPagesCount() - 1 ? (
          <li className="pagination__item">
            <button 
              className="pagination__button"
              onClick={() => this.goToPage(this.getPagesCount())}
            >
              {this.getPagesCount()}
            </button>
          </li>
        ) : ''}
  
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