import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = props => {
  return (
    <ul className="list">
      {props.items.map((item) => props.renderItem(item))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func
};

export default List;
