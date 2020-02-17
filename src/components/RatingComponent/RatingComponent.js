import React from 'react';
import PropTypes from 'prop-types';

import './RatingComponent.css';

const RatingComponent = props => {
  return <div className={props.isFilled ? 'star star--full' : 'star star--empty'} />;
};

RatingComponent.propTypes = {
  isFilled: PropTypes.bool
};

export default RatingComponent;
