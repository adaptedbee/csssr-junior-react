import React from 'react';

export default function withInputState(HoccedComponent) {
  return class extends React.Component {
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     value: 0
    //   };
    // }

    onChange = (event) => {
      const number = Number(event.target.value);
      
      // this.setState({
      //   value: number
      // });
      this.props.onChange(number);
    }

    render() {
      return (
        <HoccedComponent 
          {...this.props} 
          // value={this.state.value}
          onChange={this.onChange} 
        />
      );
    }
  }
}
