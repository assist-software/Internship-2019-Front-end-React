import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3003/movies";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data.slice(0, this.props.nrOfMov) });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        {data.map((movie, index) => (
          <div key={index} className="col-md-3 mb-5">
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
          </div>
        ))}
      </div>
    );
  }
}

export default Moovie;
