import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/homepage/homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="conatainer">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
