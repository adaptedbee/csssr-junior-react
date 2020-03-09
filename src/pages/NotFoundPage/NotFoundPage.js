import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './NotFoundPage.css';

class NotFoundPage extends React.Component {
  render() {
    return (
      <article className="page">
        <header className="page__header">
          {this.props.showBackLink ? (
            <Link 
              to={{}}
              onClick={this.props.history.goBack}
              className="page__back-link">
              <span className="visually-hidden">Назад</span>
            </Link>
          ) : ''}
          <h1 className="page__headline">
            {this.props.headline}
          </h1>
        </header>
  
        <img 
          className="page__not-found-image" 
          src="/img/planet-lamp.svg"
          width="512"
          height="512"
          alt={this.props.headline} />
      </article>
    );
  }
}

NotFoundPage.propTypes = {
  headline: PropTypes.string,
  showBackLink: PropTypes.bool
};

const NotFoundPageWithRouter = withRouter(NotFoundPage);

export default NotFoundPageWithRouter;
