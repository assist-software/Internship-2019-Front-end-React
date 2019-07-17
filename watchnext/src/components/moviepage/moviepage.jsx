import React, { Component } from "react";
import "./moviepage.css";
import MovieDescription from "./movieDescription/movieDescription";
import MoviePhotos from "./moviePhotos/moviePhotos";
import Header from "../header/header";
import Footer from "../footer/footer";

class MoviePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <MovieDescription />
        <MoviePhotos />
        <Footer />
      </div>
    );
  }
}

export default MoviePage;
