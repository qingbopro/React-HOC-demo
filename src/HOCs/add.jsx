import React, { Component } from 'react';

export default WrappedComponent => {
  return class extends Component {
    state = {
      count: this.props.count || 0
    };
    add = this.add.bind(this);
    add() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    }

    render() {
      return <WrappedComponent count={this.state.count} onClick={this.add} />;
    }
  };
};
