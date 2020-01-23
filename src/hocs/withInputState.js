import React from 'react';

export default function withInputState(HoccedComponent) {
  return class extends React.Component {
    onChange = (event) => {
      const number = event && event.target ? Number(event.target.value) : 0;
      
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
