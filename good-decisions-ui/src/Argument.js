import React, { Component } from 'react';
import jd from './exampleData.json';

const Outcome = (props) => {
  return (<th>{props.children}</th>)
}

const topHeader = (os) => {
  return os.map(Outcome).unshift(<td></td>)
}
const Fact = (props) => {
  if (props.src) {
    return (<th key={props.key} id={props.id}>{props.children}, <a href={props.src}>source</a></th>)
  } 
  return (<th>{props.children}</th>)
}

const Input = (props) => {
  return <td>{props.children}</td>
}

const buildRow = (rownum, facts, inputs) => {
  return (
    <tr>
      <Fact src={facts[rownum].src}>{facts[rownum].text}</Fact>
      {inputs[rownum].map((ip) => {return <Input>{ip}</Input>})}
    </tr>
  )
}

class Argument extends Component {
  state = {
    argument: null
  }
  constructor() { 
    super();
    this.state.title = jd.examples[0].title;
    this.state.userdata = {};
    this.state.userdata.uid = jd.examples[0].users.uid;
    this.state.outcomes = jd.examples[0].outcomes;
    this.state.facts = jd.examples[0].facts;
    this.state.inputs = jd.examples[0].users.inputs;
  }

  render() {
    let rows = [];
    let col = 0;
    let offset = 1; // how many cells left of the first outcome
    let row = 0;
    for (row = 0; row < this.state.facts.length + 1; row++) {
      let cells = [];
      let rowid = `row${row}`;
      if (row === 0) {
        for (col = 0; col < this.state.outcomes.length + offset; col++) {
          let cellid = `cell-${row}-${col}`;
          if (col < offset) {
            cells.push(<th key={cellid} id={cellid}></th>);
          } else {
            cells.push(
              <th key={cellid} id={cellid}>{this.state.outcomes[col - offset]}</th>);
          }
        }
      } else {
        for (col = 0; col < this.state.outcomes.length + offset; col++) {
          let cellid = `cell-${row}-${col}`;
          if (col === 0) {
            //cells.push(<th key={cellid} id={cellid}>{this.state.facts[row-1]}</th>);
            cells.push(<Fact key={cellid} id={cellid} src={this.state.facts[row-1].src}>{this.state.facts[row-1].text}</Fact>);
          } else {
            cells.push(
              <td key={cellid} id={cellid}>{this.state.inputs[row-1][col-offset]}</td>);
          }
        }
      }
      rows.push(<tr key={rowid}>{cells}</tr>);
    }
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>Contributions by:{this.state.userdata.uid}</h3>
        <div className="argument">
          <table>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Argument
