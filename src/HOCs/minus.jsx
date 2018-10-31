import React from 'react'
import HOCAdd from './add'
const newAdd = HOCAdd(1)()

export default WrappedComponent => {
  return class extends newAdd {
    constructor(props){
      console.log(props)
      super(props)
      console.log(this.state)
    }
    minus = this.minus.bind(this)
    minus() {
      this.setState(prevState => {
        return {
          count: prevState.count - 1
        }
      })
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          onAdd={this.add}
          onMinus={this.minus}
          {...this.props}
        />
      )
    }
  }
}
