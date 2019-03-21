import React, { Component } from 'react';

const topHeader = (fcols, outcomes) => {
  let cells = [];
  let row = 0;
  let rid = rowid(row);

  for (let col = 0; col < outcomes.length + fcols; col++) {
    let cid = cellid(row, col);
    if (col < fcols) {
      cells.push(<th key={cid} id={cid}></th>);
    } else {
      cells.push(
        <th key={cid} id={cid}>{outcomes[col - fcols]}</th>);
    }
  }
  return <tr key={rid} id={rid}>{cells}</tr>
}
const Fact = (props) => {
  if (props.src) {
    return (<th key={props.key} id={props.id}>{props.children}, <a href={props.src}>source</a></th>)
  } 
  return (<th>{props.children}</th>)
}

const buildRow = (row, fact, inputs, factCols) => {
  let cells = [];
  for (let col = 0; col < inputs.length + factCols; col++) {
    let cid = cellid(row, col);
    if (col === 0) {
      cells.push(<Fact key={cid} id={cid} src={fact.src}>{fact.text}</Fact>);
    } else {
      cells.push(
        <td key={cid} id={cid}>{inputs[col-factCols]}</td>);
    }
  }
  return (
    <tr key={rowid(row)}>
     {cells}
    </tr>
  )
  //    <Fact src={facts[row].src}>{fact.text}</Fact>
  //    {inputs.map((ip) => {return <Input>{ip}</Input>})}
}

const cellid = (row, col) => {
  return `cell-${row}-${col}`;
}

const rowid = (rownum) => {
  return `row${rownum}`;
}

const ArgumentV0dot1 = (props) => {
    let rows = [];
    let offset = 1; // how many cells left of the first outcome
    let row = 0;
    let udata = null;
    if (props.user) {
      udata = props.children.users[props.user];
    } else {
      udata = props.children.users[props.children.creator.uid];
    }
    for (row = 0; row < props.children.facts.length + 1; row++) {
      if (row === 0) {
        rows.push(topHeader(offset, props.children.outcomes));
      } else {
        rows.push(
          buildRow(row, props.children.facts[row-1], udata[row-1], offset));
      }
    }
  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

class Argument extends Component {
  render() {
    let tbl = null;
    if (this.props.children.version === "0.1") {
      tbl = <ArgumentV0dot1 user={this.props.user}>{this.props.children}</ArgumentV0dot1>
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
