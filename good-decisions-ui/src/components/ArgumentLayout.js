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

/*
 * <ArgumentLayout colOrder=[] rowOrder=[] user={} 
 *       makeCell=func3()
 *       factWidth=1
 *       outcomeHeight=1>
 *   ArgData
 * </ArgumentGrid>
 */
const ArgumentLayout = (props) => {
  let rows = [];
  let row = 0;
  let factWidth; // how many cells left of the first outcome column
  let outcomeHeight; // hom many columns the outcomes displace
  if (props.factWidth) {
    factWidth = props.factWidth;
  } else {
    factWidth = 1;
  }
  if (props.outcomeHeight) {
    outcomeHeight = props.outcomeHeight;
  } else {
    outcomeHeight = 1;
  }

  let cellFactory;
  if (props.cellFactory) {
    cellFactory = props.cellFactory;
  } else {
    cellFactory = (cid, support) => {
      return (<td key={cid} id={cid}>{support}</td>);
      //return (td key={cid} id={cid}>{udata[rrid][crid]}</td>);
    };
  }

  let udata = null;
  if (props.user) {
    udata = props.children.users[props.user];
  } else {
    udata = props.children.users[props.children.creator.uid];
  }

  let colOrder, rowOrder;
  if (props.colOrder) {
    colOrder = props.colOrder;
  } else {
    colOrder = props.children.outcomes.map((o) => {
      return o.relid;
    });
  }
  if (props.rowOrder) {
    rowOrder = props.rowOrder;
  } else {
    rowOrder = props.children.facts.map((f) => {
      return f.relid;
    });
  }

  for (row = 0; row < props.children.facts.length + 1; row++) {
    if (row === 0) {
      rows.push(topHeader2(factWidth, props.children.outcomes));
    } else {
      let rrid = rowOrder[row-outcomeHeight]
      let cells = [];
      console.log("rendering row", row, "with rrid:", rrid);
      console.log("inputs[rrid]=", udata[rrid]);

      for (let col = 0; col < colOrder.length + factWidth; col++) {
        let cid = cellid(row, col);
        if (col === 0) {
          let fact = props.children.facts[rrid]
          cells.push(
            <Fact key={cid} id={cid} src={fact.src}>
              {fact.text}
            </Fact>);
        } else {
          let crid = colOrder[col - factWidth]; 
          cells.push(cellFactory(cid, udata[rrid][crid]));
        }
      }
      rows.push( <tr key={rowid(row)}>{cells}</tr>)
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

export default ArgumentLayout;
