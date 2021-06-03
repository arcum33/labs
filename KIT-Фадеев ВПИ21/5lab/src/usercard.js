import React from "react";
import UserAvatar from "./useravatar";

const UserCard = (props) => {
  return (
    <div className="people">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-auto">{props.user.gender}</div>
            <div className="col">
              {props.user.name.first} {props.user.name.last}
            </div>
            <div className="col">{props.user.location.city}</div>
            <div className="col">{props.user.dob.age}</div>
            <div className="col">{props.user.phone}</div>
            <div className="col-auto">
              <UserAvatar
                src={props.user.picture.large}
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
