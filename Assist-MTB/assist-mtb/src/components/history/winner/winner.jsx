import React, { Component } from "react";
import "./winner.css";

class Winner extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12">
        <div className="row participantRow">
          <div className="col-md-2">
            <img
              src={require("../../../assets/profile.png")}
              className="rounded-circle z-depth-0 mr-2"
              alt="avatar"
              height="48"
            />
          </div>
          <div className="col-md-4">
            <h3 className="participantName mt-3">Catalin Lupascu</h3>
          </div>
          <div className="col-md-3">
            <h4 className="participantCourse mt-3">Summer Four Cross</h4>
          </div>
          <div className="col-md-3">
            <span className="badge badge-light mt-2">1</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Winner;
