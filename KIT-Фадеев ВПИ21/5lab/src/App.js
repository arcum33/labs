import React from "react";
import "./styles.css";
import Button from "./button";
import UserList from "./userlist";
import Preloader from "./preloader";

class App extends React.Component {
  state = {
    userInfo: undefined,
    loading: false
  };

  gettingUsers = async () => {
    this.setState({ loading: true });
    const api_url = await fetch("https://randomuser.me/api/?results=10");
    const data = await api_url.json();

    this.setState({
      userInfo: data.results,
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <Preloader />;
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Список челавекав</a>
            <form className="form-inline">
              <Button onClick={() => this.gettingUsers()} label={"Обновить"} />
            </form>
          </nav>
        </div>
        <UserList users={this.state.userInfo} />
      </div>
    );
  }
}
export default App;
