import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  render() {
    const { movie } = this.props;

    return (
      <React.Fragment>
        {movie && (
          <div>
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
        )}
      </React.Fragment>
    );
  }
}

export default Moovie;
