import React, { Component } from "react";

function UserCard(props) {
  const { user } = props;
  return (
    <div>
      {user.uid}
      {user.name}
      {user.jobTitle}
    </div>
  );
}

export default UserCard;
