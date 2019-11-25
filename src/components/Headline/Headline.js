import React from 'react';
import PropTypes from 'prop-types';

import './Headline.css';

const Headline = props => {
  const Tag = `h${props.size > 6 ? 6 : props.size}`;

  return <Tag className="headline">{props.text}</Tag>;
}

Headline.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string
};

export default Headline;
