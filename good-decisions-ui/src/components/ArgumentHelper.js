import React from 'react';

export const rowid = (rownum) => {
  return `row${rownum}`;
}

export const cellid = (row, col) => {
  return `cell-${row}-${col}`;
}

export const Fact = (props) => {
  if (props.src) {
    return (
      <th key={props.key} id={props.id}>{props.children}, <a href={props.src}>source</a></th>)
  } 
  return (<th>{props.children}</th>)
}

