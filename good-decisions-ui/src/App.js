import React, { Component } from 'react';
import './App.css';
import Argument from './components/Argument';
import ArgumentLayout from './components/ArgumentLayout';
import ArgList from './components/ArgList';
import api from './fakeapi';

class App extends Component {
  state = {}
  constructor() { 
    super();
    this.state.arguments = api.allArguments();
    this.state.users = api.allUsers();
  }
  render() {
    return (
      <div className="App">
        <h1>ACH app</h1>
        <ArgList>{this.state.arguments}</ArgList>
        <Argument>{this.state.arguments[1]}</Argument>
        <ArgumentLayout cellFactory={(cid, supp) => {
            return ( <td key={cid}><textarea >{supp}</textarea></td>)}}>
          {this.state.arguments[1]}
        </ArgumentLayout>
      </div>
    );
  }
}

export default App;
