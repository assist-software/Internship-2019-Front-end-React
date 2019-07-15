import React, { Component } from "react";
import "./movieDescription.css";
import { withRouter } from "react-router";

class MovieDescription extends Component {
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
            <div className="container">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <img
                        alt="moovie"
                        className="movImage"
                        src={movie.picture}
                      />
                    </div>
                    <div className="text-center">
                      <a href="imdb.com">
                        <small className="seeSource">See original source</small>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 description">
                    <h1 className="pt-2">{movie.title}</h1>
                    <img
                      alt="imdb"
                      className="imdbImage pl-3"
                      src={require("../../../assets/img/imdb.png")}
                    />
                    <div>
                      <small id="movieDet">
                        {movie.category} • {movie.length}
                      </small>
                    </div>
                    <div>
                      <h5 id="movieDes">{movie.description}</h5>
                    </div>
                    <div>
                      <button className="addToWatch">Add to watchlist</button>
                    </div>
                    <div className="row movDet">
                      <div className="col-md-2">
                        <ul class="list-unstyled movDetList">
                          <li>Director</li>
                          <li>Writers</li>
                          <li className="mt-4">Stars</li>
                        </ul>
                      </div>
                      <div className="col-md-8">
                        <ul class="list-unstyled movDetCont">
                          <li>{movie.director}</li>
                          <li>{movie.writers}</li>
                          <li>{movie.stars}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
        this.setState({ movies: movies });
      });
    return (
      <div className="movieDescription-content">
        {this.state.movies[this.props.match.params.id - 1]}
      </div>
    );
  }
}

export default withRouter(MovieDescription);
