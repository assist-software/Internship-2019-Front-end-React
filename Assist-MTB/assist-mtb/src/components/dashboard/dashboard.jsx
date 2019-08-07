import React, { Component } from "react";
import "./dashboard.css";

import Event from "../event/event";
class Dashboard extends Component {
  state = {};
  list = [1, 2, 3, 4, 6, 6, 4, 3];
  render() {
    return (
      <div className="container">
        <div className="headText text-center">
          <h1 className="headTitle">Evenimente</h1>
          <h6 className="headDescription">
            Descoperă cele mai recente curse de Mountain Bike si Running din
            Suceava.
          </h6>
        </div>
        <div className="col-md-12 events">
          <div className="row">
            {this.list.map((item, index) => {
              return <Event key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
