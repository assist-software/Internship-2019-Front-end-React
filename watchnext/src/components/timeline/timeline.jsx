import React, { Component } from "react";
import "./timeline.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./timelineElement/timelineElement";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3003/movies";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data.slice(0, 8) });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="vericalTime">
        <VerticalTimeline>
          {data.map((movie, index) => (
            <TimelineElement key={index} movie={movie} />
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default Timeline;
