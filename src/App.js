import React, { Component } from 'react'
import Hoc from './HOCs/minus'
import Count from './components/count'
import './App.css'

const HocAddComponent = Hoc(Count)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HocAddComponent />
      </div>
    )
  }
}

export default App
