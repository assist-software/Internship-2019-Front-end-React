import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie.id);

    return (
      <React.Fragment>
        {movie && (
          <div>
            <a href={"/movie-page/" + movie.id}>
              <div className="moovieImg">
                <img
                  className="moovieComponent"
                  alt="moovie"
                  src={movie.coverUrl}
                />
                <button className="addToList">Add to watchlist</button>
                <button className="rating">{movie.imdbScore}</button>
              </div>
              <h5 id="moovieTitle">{movie.title}</h5>
            </a>
            <small>
              Realeased date:{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              }).format(movie.releaseDate)}{" "}
              <br />
              {movie.category.map(cat => {
                return <small>{cat.name} </small>;
              })}
            </small>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Moovie;
