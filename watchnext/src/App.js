import React, { Component } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/register/register";
import Reset from "./components/reset/reset";
import Home from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import MoviePage from "./components/moviepage/moviepage";
import WhatchList from "./components/watchlist/watchlist";
import AdminPage from "./components/adminpage/adminpage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="cont">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/movie-page/:id" component={MoviePage} />
            <Route exact path="/watch-list" component={WhatchList} />
            <Route exact path="/admin" component={AdminPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
