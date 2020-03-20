import React from 'react';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <article className="not-found-page">
      <img 
        className="not-found-page__image" 
        src="/img/island.svg"
        width="223"
        height="379"
        alt="404" />
      <h1 className="not-found-page__headline">404</h1>
    </article>
  );
}

export default NotFoundPage;
