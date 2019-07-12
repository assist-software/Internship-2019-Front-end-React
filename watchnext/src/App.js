import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Reset from "./components/reset/reset";
import Home from "./components/homepage/homepage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="conatainer">
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
