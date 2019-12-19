import React from 'react';

export default function withInputState(HoccedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 0
      };
    }

    onChange = (value) => {
      this.setState({
        value: value
      });
      this.props.onChange(value);
    }

    render() {
      return (
        <HoccedComponent 
          {...this.props} 
          value={this.state.value}
          onChange={this.onChange} 
        />
      );
    }
  }
}
