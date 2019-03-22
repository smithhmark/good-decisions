import React from 'react';
import {rowid, cellid, Fact} from './ArgumentHelper'

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

export default ArgumentV0dot1;
