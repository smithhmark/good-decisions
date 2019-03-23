import React from 'react';

const UserRef = (props) => {
  let uid = props.children.uid;
  let uname = props.children.uname;
  if (props.link === true) {
    return (<span className="user-ref"><a href={"/user/"+uid}>{uname}</a></span>
    );
  } else {
    return (<span className="user-ref">{uname}</span>);
  }
}

export default UserRef;
