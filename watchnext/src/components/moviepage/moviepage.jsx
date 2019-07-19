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
        <div className="mt-5">
          <MoviePhotos />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MoviePage;
