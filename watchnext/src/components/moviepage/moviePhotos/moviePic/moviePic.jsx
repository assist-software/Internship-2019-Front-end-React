import React, { Component } from "react";
import "./moviePic.css";

class MoviePic extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-2">
        <img
          className="picLibrary"
          src={require("../../../../assets/img/moovie_image.png")}
        />
      </div>
    );
  }
}

export default MoviePic;
