import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      added: "no"
    };
  }

  addToWatchlist(event) {
    var toWatch =
      localStorage.getItem("watchlist") === null
        ? new Array()
        : JSON.parse(localStorage.getItem("watchlist"));
    if (toWatch.indexOf(this.props.movie.id) === -1) {
      toWatch.push(this.props.movie.id);
      localStorage.setItem("watchlist", JSON.stringify(toWatch));
      this.setState({ added: "yes" });
    } else {
      this.setState({ added: "already" });
    }
  }

  convertDate(myDate) {
    const newDate = new Intl.DateTimeFormat({
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(myDate);

    return newDate;
  }

  render() {
    const { movie } = this.props;

    return (
      <React.Fragment>
        {movie && (
          <div>
            <div className="moovieImg">
              <img
                className="moovieComponent"
                alt="moovie"
                src={movie.coverUrl}
              />
              <button
                className={
                  this.state.added === "yes"
                    ? "addedToList"
                    : [
                        this.state.added === "already"
                          ? "alreadyAddedToList"
                          : "addToList"
                      ]
                }
                onClick={this.addToWatchlist.bind(this)}
              >
                {this.state.added === "yes"
                  ? "Added"
                  : [
                      this.state.added === "already"
                        ? "Already added"
                        : "Add to watchlist"
                    ]}
              </button>

              <button className="rating">{movie.imdbScore}</button>
            </div>
            <a href={"/movie-page/" + movie.id}>
              <h5 id="moovieTitle">{movie.title}</h5>
            </a>
            <small>
              {movie.category &&
                movie.category.map((cat, index) => {
                  return <small key={index}>{cat.name} </small>;
                })}{" "}
              <br />
              {this.convertDate(movie.releaseDate)}
            </small>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Moovie;
