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
          value={this.state.value}
          onChange={this.onChange} 
          {...this.props} 
        />
      );
    }
  }
}
