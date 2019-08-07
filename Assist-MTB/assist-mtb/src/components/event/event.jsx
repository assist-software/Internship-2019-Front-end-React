import React, { Component } from "react";
import "./event.css";

class Event extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4">
        <a href="about-event">
          <div className="eventImg">
            <img
              className="eventComponent"
              alt="event"
              src={require("../../assets/event.png")}
            />
            <button className="date">
              20 <span className="dateSpan">SEP</span>
            </button>

            <h3 className="eventTitle">Summer Four Cross</h3>
            <h5 className="eventDate">30 Septembrie | 08:00</h5>
          </div>
        </a>
      </div>
    );
  }
}

export default Event;
