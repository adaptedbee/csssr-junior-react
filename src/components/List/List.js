import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = props => {
  const ListItem = props.renderItem;

  return (
    <ul className="list">
      {props.items.map((item, index) => 
        <li key={index}>
          <ListItem item={item} />
        </li>
      )}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func
};

export default List;
