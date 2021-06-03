import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function logOut() {
    localStorage.removeItem("registered");
    localStorage.removeItem("login");
    localStorage.removeItem("password");
    window.location.reload();
  }
  return (
    <div className="header">
      <Link to="/">Главная</Link>
      <Link to="/profile">Мой Профиль</Link>
      {!localStorage.getItem("registered") ? (
        <Link to="/sign-in">Регистрация</Link>
      ) : null}
      {localStorage.getItem("registered") ? (
        <button onClick={() => logOut()}>Выйти</button>
      ) : null}
    </div>
  );
};

export default Header;
