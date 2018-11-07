import React, { Component } from 'react'
import Hoc from './HOCs/add'
import Count from './components/count'
import './App.css'

const HocAddComponent = Hoc(1)(Count)

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
