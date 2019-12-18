import React from 'react';
import PropTypes from 'prop-types';

import './InputNumber.css';
import withInputState from '../../hocs/withInputState.js';

class InputNumber extends React.Component {
  handlePriceChange = (event) => {
    const string = event.target.value.replace(/\D/g, '');
    const integer = parseInt(string, 10);
    if (string.length === 0) {
      this.props.onChange(0);
      return;
    }
    if (isNaN(integer) || integer < 0) {
      return;
    }

    this.props.onChange(integer);
  }

  render() {
    return (
      <input 
        className="text-input text-input--price" 
        type="text"
        value={this.props.value}
        onChange={this.handlePriceChange}
      />
    );
  }
}

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  onPriceChange: PropTypes.func
};

export default withInputState(InputNumber);
