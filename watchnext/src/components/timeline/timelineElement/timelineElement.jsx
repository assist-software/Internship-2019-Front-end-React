import React, { Component } from "react";
import "./timelineElement.css";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class TimelineElement extends Component {
  render() {
    const { movie } = this.props;
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        icon={new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).format(movie.releaseDate)}
      >
        {movie && (
          <div className="row">
            <div className="col-md-3">
              <img className="timelinePic" src={movie.coverUrl} alt="moovie " />
            </div>
            <div className="col-md-9 timelineDescription">
              <div className="row titRow">
                <div className="timelineTitle">{movie.title}</div>
              </div>
              <div className="row scorRow">
                <div className="imdb_sc mr-4">{movie.imdbScore}</div>
              </div>
            </div>
          </div>
        )}
      </VerticalTimelineElement>
    );
  }
}

export default TimelineElement;
