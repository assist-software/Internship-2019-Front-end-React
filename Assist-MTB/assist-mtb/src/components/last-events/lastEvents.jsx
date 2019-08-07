import React, { Component } from "react";
import "./lastEvents.css";
import Event from "../event/event";

class lastEvents extends Component {
  state = {};
  list = [1, 2, 3, 4, 6, 6, 4, 3];
  render() {
    return (
      <div className="container">
        <div className="headText text-center">
          <h1 className="headTitle">Ultimile Evenimente</h1>
          <h6 className="headDescription">
            Revizueste ultimele tale provocari de Mountain Biking si Running.
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

export default lastEvents;
