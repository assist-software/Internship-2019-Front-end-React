import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  render() {
    let url = "http://localhost:3002/movies";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let movies = data.map((movie, index) => {
          return (
            <div className="col-md-3 mb-5">
              <div key={index}>
                <a href={"/movie-page/" + movie.id}>
                  <div className="moovieImg">
                    <img
                      className="moovieComponent"
                      alt="moovie"
                      src={movie.picture}
                    />
                    <button className="addToList">Add to watchlist</button>
                    <button className="rating">{movie.imdb_score}</button>
                  </div>

                  <h5 id="moovieTitle">{movie.title}</h5>
                </a>
                <small>
                  Realeased date: {movie.release_date} <br /> {movie.category}
                </small>
              </div>
            </div>
          );
        });
        this.setState({ movies: movies });
      });

    return <div className="row ">{this.state.movies}</div>;
  }
}

export default Moovie;
