import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Reset from "./components/reset/reset";
import Home from "./components/homepage/homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="conatainer">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
