import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="profile">
      {!localStorage.getItem("registered") ? <Redirect to="/" /> : null}
      <div>
        Ваш логин: <div>{localStorage.getItem("login")}</div>
      </div>
      <div>
        Ваш пароль: <div>{localStorage.getItem("password")}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
