import React, { Component } from 'react';
import UserRef from './UserRef';
import ArgRef from './ArgRef';

const ArgListEntry = (props) => {
  if (props.creator) {
    return (<li key={props.kk}><ArgRef>{props.children}</ArgRef>
       <span>&nbsp;(Created by:<UserRef link>{props.creator}</UserRef>)</span></li>
    );
  } else {
    return (<li key={props.kk}><ArgRef>{props.children}</ArgRef></li>);
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
      //console.log("arglist showcreator?", this.props.showcreator);
      if (this.props.showcreator) {
        args = this.props.children.map((e, i) => {
          return <ArgListEntry key={i} kk={i} creator={e.creator}>{e}</ArgListEntry>;
        });
      } else {
        args = this.props.children.map((e, i) => {
          return <ArgListEntry key={i} kk={i}>{e}</ArgListEntry>;
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
