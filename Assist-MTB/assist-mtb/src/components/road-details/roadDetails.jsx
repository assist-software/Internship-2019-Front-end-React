import React, { Component } from "react";
import "./roadDetails.css";
import Map from "../about-event/eventRoad/eventRoad";
import ParticipantRanking from "./participant-ranking/participantRanking";
import Button from "@material-ui/core/Button";

class roadDetails extends Component {
  state = {};
  list = [1, 1, 1, 1, 1, 1];
  render() {
    return (
      <div>
        <Map
          id="myMap"
          options={{
            center: { lat: 41.0082, lng: 28.9784 },
            zoom: 8
          }}
          onMapLoad={map => {
            new window.google.maps.Marker({
              position: { lat: 41.0082, lng: 28.9784 },
              map: map,
              title: "Hello Istanbul!"
            });
          }}
        />
        <button className="sosButton">SOS</button>
        <h1 className="headTime">
          Timp in cursa: <span className="time">50 minute</span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="ranking">
              <h1 className="realTime">Real time ranking</h1>
            </div>
            <div className="col-md-12">
              <div className="row">
                {this.list.map((item, index) => {
                  return <ParticipantRanking key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <a href="">
              <h2 className="yourPosition">Vezi locatia ta pe harta</h2>
            </a>
          </div>
          <div className="row my-5 rowFinish">
            <Button
              variant="contained"
              color="primary"
              className="submitFinish"
            >
              FINALIZEAZA CURSA
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default roadDetails;
