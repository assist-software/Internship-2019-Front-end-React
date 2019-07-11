import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Homepage from "./components/homepage/homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="conatainer">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
