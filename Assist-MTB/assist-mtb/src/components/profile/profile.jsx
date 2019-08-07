import React, { Component } from "react";
import "./profile.css";
import Event from "../event/event";

class Profile extends Component {
  state = {};
  list = [1, 2, 3, 4, 6];
  render() {
    return (
      <div className="container">
        <div className="row profileImage">
          <img
            src={require("../../assets/profile.png")}
            className="rounded-circle"
            alt="userAvatar"
          />
        </div>
        <div className="row userFullName">
          <h3>Alexandru Popescu</h3>
        </div>
        <div className="row userEmail">
          <h4>alexandrupopescu@gmail.com</h4>
        </div>
        <div className="row userStatistics">
          <h3>
            10<span className="mx-5 separator">|</span>2
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="left-side">Participari</h3>
          </div>
          <div className="col-md-6">
            <h3 className="right-side pl-3">Ani vechime</h3>
          </div>
        </div>
        <div className="row lastEventsRow">
          <h3 className="lastEventsTitle ml-4">Evenimente trecute</h3>
        </div>
        <div className="col-md-12 lastEvents">
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

export default Profile;
