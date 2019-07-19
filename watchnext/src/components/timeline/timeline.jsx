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
    let url = "http://192.168.151.218:3000/api/movies";
    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data });
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
