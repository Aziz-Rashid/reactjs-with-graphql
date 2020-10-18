import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Maindash from "./containers/Maindash";
import Dashboard from "./containers/Dashboard";
import Login from "./components/login/login";
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main-dashboard" component={Maindash} />
        <Route exact path="/dashboard/:id" component={Dashboard} />
        <Route exact path="/dashboard/:id/:id" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
