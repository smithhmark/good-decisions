import React, { Component } from 'react';
import './App.css';
import Argument from './Argument';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stripped base app</h1>
        <br />
        <Argument />
      </div>

    );
  }
}

export default App;
