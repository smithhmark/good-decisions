import React, { Component } from 'react';

const ArgListEntry = (props) => {
  if (props.creator) {
    return (<li key={props.key}><span>{props.children}</span>
       <span>&nbsp;(Created by:<span>{props.creator}</span>)</span></li>
    );
  } else {
    return (<li key={props.key}><span>{props.children}</span></li>);
  }
}

class ArgList extends Component {
  render() {
    let args = null;
    if (this.props.children) {
      args = this.props.children.map((e, i) => {
        return <ArgListEntry key={i} creator={e.users.uid}>{e.title}</ArgListEntry>;
      });
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
