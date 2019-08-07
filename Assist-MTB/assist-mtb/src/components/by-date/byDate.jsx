import React, { Component } from "react";
import "./byDate.css";
import Calendar from "react-calendar";
import Event from "../event/event";

class byDate extends Component {
  state = {};
  list = [1, 2, 3, 4, 6, 6, 4, 3];
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="calendarRow">
              <Calendar />
            </div>
          </div>
          <div className="col-md-7 ml-5">
            <div className="row byDateShow">
              {this.list.map((item, index) => {
                return <Event key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default byDate;
