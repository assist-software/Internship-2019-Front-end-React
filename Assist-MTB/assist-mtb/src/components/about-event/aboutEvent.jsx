import React, { Component } from "react";
import "./aboutEvent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import FullWidthTabs from "./description-tabs/descriptionTabs";
import Map from "./eventRoad/eventRoad";
import Button from "@material-ui/core/Button";

class aboutEvent extends Component {
  state = {};

  render() {
    return (
      <div className="about-content">
        <div className="aboutEventImg">
          <img
            className="eventPicture"
            alt="moovie"
            src={require("../../assets/event.png")}
          />
          <button className="share">
            <FontAwesomeIcon icon={faShareAlt} color="#2f1b3c" />
          </button>
          <button className="dateEvent">
            20 <span className="dateSpanEvent">SEP</span>
          </button>
          <h3 className="viewEventTitle">Summer Four Cross</h3>
          <h5 className="viewEventDate">30 Septembrie | 08:00</h5>
        </div>
        <div className="container">
          <div className="tabsRow">
            <FullWidthTabs />
          </div>
          <a href="road-details">
            <div className="eventRoad pt-5">
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
            </div>
          </a>

          <div className="startRoute row my-5">
            <Button variant="contained" color="primary" className="submitStart">
              Start
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutEvent;
