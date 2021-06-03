import React from "react";
import UserCard from "./usercard";

const UserList = (props) => {
  return (
    <div>{props.users && props.users.map((u) => <UserCard user={u} />)}</div>
  );
};

export default UserList;
