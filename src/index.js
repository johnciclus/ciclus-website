import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product

import Components from "views/Components/Components.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import People from "views/People/People.js";
import John from "views/John/John.js";
import Projects from "views/Projects/Projects.js";
import Home from "views/Home/Home.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/projects" component={Projects} />
      <Route path="/john" component={John} />
      <Route path="/people" component={People} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
