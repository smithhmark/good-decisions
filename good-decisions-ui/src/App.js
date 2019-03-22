import React, { Component } from 'react';
import './App.css';
import Argument from './components/Argument';
import ArgList from './components/ArgList';
import jd from './exampleData.json';

class App extends Component {
  state = {}
  constructor() { 
    super();
    this.state.arguments = jd.arguments;
    this.state.users = jd.users;
  }
  render() {
    return (
      <div className="App">
        <h1>ACH app</h1>
        <ArgList>{this.state.arguments}</ArgList>
        <Argument>{this.state.arguments[1]}</Argument>
      </div>
    );
  }
}

export default App;
