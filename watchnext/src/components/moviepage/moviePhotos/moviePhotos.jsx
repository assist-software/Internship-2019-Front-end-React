import React, { Component } from "react";
import "./moviePhotos.css";
import MoviePic from "./moviePic/moviePic";

const j = [1, 2, 3, 4, 5, 6];

class MoviePhotos extends Component {
  state = {};
  render() {
    return (
      <div className="picsContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 id="picLabel">Photos</h1>
              </div>
            </div>
            <div className="picRow">
              <div className="row pl-3">
                {j.map(a => {
                  return <MoviePic />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePhotos;
