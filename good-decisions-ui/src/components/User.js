import React from 'react';
import ArgList from './ArgList'

const User = (props) => {
  let created, contributedTo;
  let uname = props.children.uname;
  if (props.children.args.owned) {
    created = <div>
        <span>list of owned Arguments goes here</span>
        <ArgList>{props.children.args.contrib}</ArgList>
      </div>

  } else {
    created = <span>{uname} hasn't created any arguments yet</span>
  }
  if (props.children.args.contrib) {
    contributedTo = <div>
        <span>list of Arguments contributed to goes here</span>
        <ArgList showcreator={true}>{props.children.args.contrib}</ArgList>
      </div>

  } else {
    contributedTo = <span>{uname} hasn't contributed to  any arguments yet</span>
  }

  return (
    <div>
        <div>
          <span>Username: {props.children.uid}</span>
        </div>
        <div>
          <span>Email: {props.children.email}</span>
        </div>
        <div>
        {created}
        {contributedTo}
      </div>
    </div>
  );
}

export default User
