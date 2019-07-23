import React, { Component } from "react";
import "./headMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class headMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: [],
      message: null
    };
  }

  addToWatchlist(event) {
    var toWatch =
      localStorage.getItem("watchlist") === null
        ? new Array()
        : JSON.parse(localStorage.getItem("watchlist"));
    if (toWatch.indexOf(this.state.data.id) === -1) {
      toWatch.push(this.state.data.id);
      localStorage.setItem("watchlist", JSON.stringify(toWatch));
    }

    this.setState({ message: "Movie added to WatchList" });
    setTimeout(() => {
      // console.log(this.state.message);
      this.setState({ message: null });
    }, 3000);
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
        this.setState({ data: data[data.length - 1] });
      });
  }

  render() {
    const { data, message } = this.state;
    return (
      <div className="hero-content">
        <div className="container py-4">
          <div className="row justify-content-center align-items-center hero-row">
            <div className="col-md-6">
              <div className="row headTitle">
                <div>
                  <h5 className="heroTitle">{data.title}</h5>
                </div>
                <div className="mt-4">
                  <h3 className="heroDescription">{data.description}</h3>
                </div>
                <div className="mt-5">
                  <button
                    className="heroWatchButton"
                    data-toggle="modal"
                    data-target="#watchTrailer"
                  >
                    Watch trailer
                  </button>
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
                              src={this.replaceUrl(data.trailerUrl)}
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="heroAddButton ml-3"
                    onClick={this.addToWatchlist.bind(this)}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="mr-3"
                    />
                    Add to list
                  </button>
                  {message && <div className="add-message">{message}</div>}
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="heroImageDiv">
                <img className="heroImage" src={data.coverUrl} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <button className="btn nextPage" onClick={this.props.nextPage}>
              <a href="#RecentAdded">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  color="white"
                  className="mt-5"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default headMovie;
