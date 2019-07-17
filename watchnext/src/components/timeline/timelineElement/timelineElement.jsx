import React, { Component } from "react";
import "./timelineElement.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCar, faMinus } from "@fortawesome/free-solid-svg-icons";

class TimelineElement extends Component {
  render() {
    const { movie } = this.props;
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        icon={movie.release_date}
      >
        {movie && (
          <div className="row">
            <div className="col-md-3">
              <img className="timelinePic" src={movie.picture} alt="moovie " />
            </div>
            <div className="col-md-9 timelineDescription">
              <div className="flex-row">
                <div className="timelineTitle">{movie.title}</div>
              </div>
              <div className="flex-row ml-1">
                <div className="imdb_sc mr-4">{movie.imdb_score}</div>
                <div className="timelineCategory">{movie.category}</div>
              </div>
            </div>
          </div>
        )}
      </VerticalTimelineElement>
    );
  }
}

export default TimelineElement;
