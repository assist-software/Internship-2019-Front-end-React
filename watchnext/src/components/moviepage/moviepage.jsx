import React, { Component } from "react";
import "./moviepage.css";
import MovieDescription from "./movieDescription/movieDescription";
import MoviePhotos from "./moviePhotos/moviePhotos";
import Header from "../header/header";

class MoviePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <MovieDescription />
        <MoviePhotos />
      </div>
    );
  }
}

export default MoviePage;
