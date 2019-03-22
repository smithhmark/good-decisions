import React from 'react';
import {rowid, cellid, Fact} from './ArgumentHelper'

const topHeader2 = (fcols, outcomes) => {
  let cells = [];
  let row = 0;
  let rid = rowid(row);

  for (let col = 0; col < outcomes.length + fcols; col++) {
    let cid = cellid(row, col);
    if (col < fcols) {
      cells.push(<th key={cid} id={cid}></th>);
    } else {
      cells.push(
        <th key={cid} id={cid}>{outcomes[col - fcols].text}</th>);
    }
  }
  return <tr key={rid} id={rid}>{cells}</tr>
}

const buildRow2 = (row, fact, inputs, factCols, colRelIds) => {
  let cells = [];
  for (let col = 0; col < colRelIds.length + factCols; col++) {
    let cid = cellid(row, col);
    if (col === 0) {
      cells.push(<Fact key={cid} id={cid} src={fact.src}>{fact.text}</Fact>);
    } else {
      let crid = colRelIds[col - factCols]; 
      cells.push(
        <td key={cid} id={cid}>{inputs[crid]}</td>);
    }
  }
  return (
    <tr key={rowid(row)}>
     {cells}
    </tr>
  )
}

const ArgumentV0dot2 = (props) => {
  let rows = [];
  let offset = 1; // how many cells left of the first outcome
  let row = 0;
  let udata = null;
  if (props.user) {
    udata = props.children.users[props.user];
  } else {
    udata = props.children.users[props.children.creator.uid];
  }
  let colRelIds = props.children.outcomes.map((o) => {
    return o.relid;
  });
  let rowRelIds = props.children.facts.map((f) => {
    return f.relid;
  });
  for (row = 0; row < props.children.facts.length + 1; row++) {
    if (row === 0) {
      rows.push(topHeader2(offset, props.children.outcomes));
    } else {
      let rrid = rowRelIds[row-1]
      console.log("rendering row", row, "with rrid:", rrid);
      console.log("inputs[rrid]=", udata[rrid]);
      rows.push(
        buildRow2(
          row,
          props.children.facts[rrid],
          udata[rrid],
          offset,
          colRelIds));
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

export default ArgumentV0dot2
