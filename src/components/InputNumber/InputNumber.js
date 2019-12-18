import React from 'react';
import PropTypes from 'prop-types';

import './InputNumber.css';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      priceValue: this.props.defaultValue
    };
  }

  handlePriceChange = (event) => {
    const string = event.target.value.replace(/\D/g, '');
    const integer = parseInt(string, 10);
    if (string.length === 0) {
      this.setState({ 
        minPriceValue: 0
      });
      this.props.onPriceChange(0);
      return;
    }
    if (isNaN(integer) || integer < 0) {
      return;
    }

    this.setState({ 
      priceValue: integer
    });
    this.props.onPriceChange(integer);
  }

  render() {
    return (
      <input 
        className="text-input text-input--price" 
        type="text"
        value={this.state.priceValue}
        onChange={this.handlePriceChange}
      />
    );
  }
}

InputNumber.propTypes = {
  defaultValue: PropTypes.number,
  onPriceChange: PropTypes.func
};

export default InputNumber;
