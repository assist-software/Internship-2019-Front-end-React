import React, { Component } from "react";
import "./movieDescription.css";

class MovieDescription extends Component {
  state = {};
  render() {
    return (
      <div className="movieDescription-content">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  alt="moovie"
                  className="movImage"
                  src={require("../../../assets/img/details.png")}
                />
                <div className="text-center">
                  <a href="imdb.com">
                    <small className="seeSource">See original source</small>
                  </a>
                </div>
              </div>
              <div className="col-md-6 description">
                <h1 className="pt-2">The Hustle </h1>
                <img
                  alt="imdb"
                  className="imdbImage pl-3"
                  src={require("../../../assets/img/imdb.png")}
                />
                <div>
                  <small id="movieDet">Comedy • Crime • 1h 33min</small>
                </div>
                <div>
                  <h5 id="movieDes">
                    Josephine Chesterfield is a glamorous, seductive British
                    woman who has a penchant for defrauding gullible men out of
                    their money. Into her well-ordered, meticulous world comes
                    Penny Rust, a cunning and fun-loving Australian woman who
                    lives to swindle unsuspecting marks. Despite their different
                    methods, the two grifters soon join forces for the ultimate
                    score -- a young and naive tech billionaire in the South of
                    France.
                  </h5>
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
                      <li>Chris Addison</li>
                      <li>
                        Stanley Shapiro (screenplay by), Paul Henning
                        (screenplay by) •
                      </li>
                      <li>
                        Anne Hathaway, Rebel Wilson, Alex Sharp, Timothy Simons
                        •
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDescription;
