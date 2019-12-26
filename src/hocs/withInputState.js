import React from 'react';

export default function withInputState(HoccedComponent) {
  return class extends React.Component {
    onChange = (event) => {
      const number = Number(event.target.value);
      
      this.props.onChange(number);
    }

    render() {
      return (
        <HoccedComponent 
          {...this.props} 
          onChange={this.onChange} 
        />
      );
    }
  }
}
