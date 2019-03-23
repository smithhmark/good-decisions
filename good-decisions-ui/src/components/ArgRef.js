import React from 'react';

const ArgRef = (props) => {
  let aid = props.children.aid;
  let title = props.children.title;
  if (!title) {
    title = "<"+aid + ">"; //!!! unpleasent
  }
  if (props.hidelink === true) {
    return (<span className="argument-ref">{title}</span>);
  }
  return (
    <span className="argument-ref"><a href={"/argument/"+aid}>{title}</a></span>
  );
}

export default ArgRef;
