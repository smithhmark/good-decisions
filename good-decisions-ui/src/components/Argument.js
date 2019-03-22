import React, { Component } from 'react';
import ArgumentV0dot1 from './ArgumentV0dot1';
import ArgumentV0dot2 from './ArgumentV0dot2';

class Argument extends Component {
  render() {
    let tbl = null;
    if (this.props.children.version === "0.1") {
      tbl = <ArgumentV0dot1 user={this.props.user}>{this.props.children}</ArgumentV0dot1>
    } else if (this.props.children.version === "0.2") {
      tbl = <ArgumentV0dot2 user={this.props.user}>{this.props.children}</ArgumentV0dot2>
    } else {
      tbl = <span>Yikes! I don't know how to render that!</span>
    }
    return (
      <div>
        <h1>{this.props.children.title}</h1>
        <h3>Created by:{this.props.children.creator.uid}</h3>
        <h3>Contributions by:{this.props.user? this.props.user : this.props.children.creator.uid}</h3>
        <div className="argument">
          {tbl}
        </div>
      </div>
    );
  }
}

export default Argument
