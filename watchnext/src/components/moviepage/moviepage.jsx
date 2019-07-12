import React, { Component } from "react";
import "./moviepage.css";
import MovieDescription from "./movieDescription/movieDescription";
import MoviePhotos from "./moviePhotos/moviePhotos";

class MoviePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <MovieDescription />
        <MoviePhotos />
      </div>
    );
  }
}

export default MoviePage;
