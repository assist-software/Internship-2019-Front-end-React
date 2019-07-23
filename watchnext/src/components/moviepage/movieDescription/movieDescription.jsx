import React, { Component } from "react";
import "./movieDescription.css";
import { withRouter } from "react-router";

class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: []
    };
  }

  addToWatchlist(event) {
    var toWatch =
      localStorage.getItem("watchlist") === null
        ? new Array()
        : JSON.parse(localStorage.getItem("watchlist"));
    if (toWatch.indexOf(this.props.match.params.id) === -1) {
      toWatch.push(this.props.match.params.id);
      localStorage.setItem("watchlist", JSON.stringify(toWatch));
    }
  }

  replaceUrl(trailerUrl) {
    if (trailerUrl) {
      const finalUrl = trailerUrl.replace("watch?v=", "embed/");
      return finalUrl;
    }
  }

  componentDidMount() {
    let url = "http://192.168.151.218:3000/api/movies";
    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          // eslint-disable-next-line array-callback-return
          data: data.filter(mov => {
            if (parseInt(this.props.match.params.id) === mov.id) return mov;
          })
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {data[0] && (
          <div className="movieDescription-content">
            <div className="container">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="trailerDiv">
                      <button
                        className="btn"
                        data-toggle="modal"
                        data-target="#watchTrailer"
                      >
                        <img
                          src={require("../../../assets/img/play-button.png")}
                          alt="Play Trailer"
                          className="playIcon"
                        />
                      </button>

                      <img
                        alt="moovie"
                        className="movImage"
                        src={data[0].coverUrl}
                      />

                      <div
                        className="modal fade bd-example-modal-lg"
                        id="watchTrailer"
                        role="dialog"
                      >
                        <div className="modal-dialog trailerDialog modal-lg">
                          <div className="modal-content trailerContent">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                  title="trailerYoutube"
                                  className="embed-responsive-item"
                                  src={this.replaceUrl(data[0].trailerUrl)}
                                  allowFullScreen
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <a href={data.originalSourceUrl}>
                        <small className="seeSource">See original source</small>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 description mt-4">
                    <div className="row">
                      <h1>{data[0].title}</h1>

                      <img
                        alt="imdb"
                        className="imdbImage pl-3 pt-2"
                        src={require("../../../assets/img/IMDB_Logo.png")}
                      />
                      <h5 className="imdb-score pt-2" id="score-imdb">
                        {data[0].imdbScore}
                        <small>/10</small>
                      </h5>
                      <img
                        alt="star-imdb"
                        className="imdbImageStar pl-3 pt-2"
                        src={require("../../../assets/img/star-imdb.png")}
                      />
                    </div>

                    <div>
                      <small id="movieDet">
                        {data[0].category &&
                          data[0].category.map((cat, index) => {
                            return <small key={index}>{cat.name} - </small>;
                          })}
                        {data[0].duration}
                      </small>
                    </div>
                    <div>
                      <h5 id="movieDes">{data[0].description}</h5>
                    </div>
                    <div>
                      <button
                        className="addToWatch"
                        onClick={this.addToWatchlist.bind(this)}
                      >
                        Add to watchlist
                      </button>
                    </div>
                    <div className="row detRow mt-5">
                      <div className="col-md-2">
                        <h5 className="firstColumn">Director</h5>
                      </div>
                      <div className="col-md-8 ml-5">
                        <h5 className="secondColumn">{data[0].director}</h5>
                      </div>
                    </div>
                    <div className="row detRow">
                      <div className="col-md-2">
                        <h5 className="firstColumn">Writers</h5>
                      </div>
                      <div className="col-md-8 ml-5">
                        <h5 className="secondColumn">{data[0].writers}</h5>
                      </div>
                    </div>
                    <div className="row detRow">
                      <div className="col-md-2">
                        <h5 className="firstColumn">Stars</h5>
                      </div>
                      <div className="col-md-8 ml-5">
                        <h5 className="secondColumn">{data[0].stars}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(MovieDescription);
