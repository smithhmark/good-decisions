import React, { Component } from 'react';

const ArgListEntry = (props) => {
  if (props.creator) {
    return (<li key={props.kk}><span>{props.children}</span>
       <span>&nbsp;(Created by:<span>{props.creator.uname}</span>)</span></li>
    );
  } else {
    return (<li key={props.kk}><span>{props.children}</span></li>);
  }
}

/*
 * <ArgList>[argSumms]</ArgList>
 *
 */
class ArgList extends Component {
  render() {
    let args = null;
    if (this.props.children) {
      //console.log("arglist children:", this.props.children);
      if (this.props.showcreator) {
        args = this.props.children.map((e, i) => {
          return <ArgListEntry key={i} kk={i} creator={e.creator}>{e.title}</ArgListEntry>;
        });
      } else {
        args = this.props.children.map((e, i) => {
          return <ArgListEntry key={i} kk={i}>{e.title}</ArgListEntry>;
        });
      }
    } else {
      args = "There are no arguments available";
    }
    return (
      <div>
        <span>Arguments:</span>
        <ul>
          {args}
        </ul>
      </div>
    )
  }
}

export default ArgList;
