import React, { Component } from 'react'

export default defaultCount => WrappedComponent => {
  return class extends Component {
    state = {
      count: defaultCount || 0
    }
    add = this.add.bind(this)
    add() {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        }
      })
    }

    render() {
      return <WrappedComponent {...this.state} onAdd={this.add} {...this.props}/>
    }
  }
}
