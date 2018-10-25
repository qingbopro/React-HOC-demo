import React, { Component } from 'react';
import HocAdd from './HOCs/add';
import Count from './components/add';
import './App.css';

const HocAddComponent = HocAdd(Count);
class App extends Component {
  render() {
    return (
      <div className="App">
        <HocAddComponent count={2} />
      </div>
    );
  }
}

export default App;
