import React, { Component } from 'react';
import ArgumentLayout from './ArgumentLayout';
import UserRef from './UserRef';

class Argument extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.children.title}</h1>
        <h3>Created by:<UserRef link>{this.props.children.creator}</UserRef></h3>
        <h3>Contributions by:{this.props.user? this.props.user : this.props.children.creator.uid}</h3>
        <div className="argument">
          <ArgumentLayout cellFactory={(cid, supp) => {
              return ( <td key={cid}>{supp}</td>)}}>
            {this.props.children}
          </ArgumentLayout>
        </div>
      </div>
    );
  }
}

export default Argument
