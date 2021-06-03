import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import SignInPage from "./components/SignInPage";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <div classname="Appdiv">
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/sign-in" component={SignInPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
