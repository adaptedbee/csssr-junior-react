import React from 'react';

import './Pagination.css';

const Pagination = props => {

  return (
    <ul className="pagination"> 
      <li className="pagination__item pagination__item--prev">
        <button className="pagination__button">Назад</button>
      </li>

      <li className="pagination__item">
        <button className="pagination__button pagination__button--active">1</button>
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
        <button className="pagination__button">Вперёд</button>
      </li>
    </ul>
  );
}

export default Pagination;
