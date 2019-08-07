import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import byDate from "./components/by-date/byDate";
import lastEvents from "./components/last-events/lastEvents";
import UserSettings from "./components/user-settings/settings";
import myEvents from "./components/my-events/myEvents";
import aboutEvent from "./components/about-event/aboutEvent";
import roadDetails from "./components/road-details/roadDetails";
import History from "./components/history/history";
import Login from "./components/login/login";
import SignIn from "./components/signin/signin";

function App() {
  const currentPage = window.location.pathname;
  return (
    <Router>
      {currentPage && currentPage != "/login" ? <Navbar /> : ""}
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/my-profile" component={Profile} />
        <Route exact path="/by-date" component={byDate} />
        <Route exact path="/last-events" component={lastEvents} />
        <Route exact path="/settings" component={UserSettings} />
        <Route exact path="/my-events" component={myEvents} />
        <Route exact path="/about-event" component={aboutEvent} />
        <Route exact path="/road-details" component={roadDetails} />
        <Route exact path="/history" component={History} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
