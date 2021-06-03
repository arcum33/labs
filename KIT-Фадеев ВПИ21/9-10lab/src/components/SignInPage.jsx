import React from "react";

class SignInPage extends React.Component {
  register() {
    let login = document.getElementById("login");
    let password = document.getElementById("password");

    localStorage.setItem("registered", true);
    localStorage.setItem("login", login.value);
    localStorage.setItem("password", password.value);
  }

  render() {
    return (
      <div classname="signin">
        <form action="">
          <input placeholder="Логин" type="text" name="" id="login" />
          <br />
          <input placeholder="Пароль" type="password" name="" id="password" />
          <br />
          <button onClick={() => this.register()}>Принять</button>
        </form>
      </div>
    );
  }
}

export default SignInPage;
