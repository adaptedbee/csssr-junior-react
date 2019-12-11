import React from 'react';
import PropTypes from 'prop-types';

const RatingComponent = props => {
  return <div className={props.isFilled ? 'starFill' : ''} />;
};

RatingComponent.propTypes = {
  isFilled: PropTypes.bool
};

export default RatingComponent;
