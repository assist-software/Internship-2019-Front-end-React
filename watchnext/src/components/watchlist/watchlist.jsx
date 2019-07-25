import React, { Component } from "react";
import "./watchlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/header";
import Footer from "../footer/footer";
class WhatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existToWatch: false,
      nrWatch: 0,
      data: [],
      filteredData: [],
      filter: "",
      isLoggedIn: false
    };
  }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  removeFromWatchlist(movId) {
    var toWatch = JSON.parse(localStorage.getItem("watchlist"));
    if (toWatch.includes(movId)) {
      for (var i = toWatch.length - 1; i >= 0; i--) {
        if (toWatch[i] === movId) {
          toWatch.splice(i, 1);
          localStorage.setItem("watchlist", JSON.stringify(toWatch));
          this.componentDidMount();
        }
      }
    }
  }
  selectedFilterHandler = event => {
    event.preventDefault();
    const cat = event.target.value;
    if (cat === "none") {
      var moviesLocal = JSON.parse(localStorage.getItem("watchlist"));
    } else {
      // eslint-disable-next-line no-redeclare
      var moviesLocal = JSON.parse(localStorage.getItem("watchlist")).reverse();
    }
    this.setState({ existToWatch: true });
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
          data: data.filter(mov => {
            for (var i = 0; i < moviesLocal.length; i++) {
              if (mov.id === moviesLocal[i]) return mov;
            }
          })
        });
      });
  };
  componentDidMount() {
    var moviesLocal = JSON.parse(localStorage.getItem("watchlist"));
    if (moviesLocal != null) {
      this.setState({ nrWatch: moviesLocal.length });

      this.setState({ existToWatch: true });
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
            data: data.filter(mov => {
              for (var i = 0; i < moviesLocal.length; i++) {
                if (mov.id === moviesLocal[i]) return mov;
              }
            })
          });
        });
    }
  }
  render() {
    const { filter, data, existToWatch, nrWatch } = this.state;
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    localStorage.setItem("nrWatch", nrWatch);
    return (
      <React.Fragment>
        <div className="whatchlist-content">
          <Header nrWatch={nrWatch} />
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <h1 id="welcome" className="pb-5">
                      Welcome to your Watchlist page.
                    </h1>
                  </div>
                </div>
                <div className="row searchRow">
                  <div className="col-md-6">
                    <div id="watchSearch">
                      <div className="input-group col-md-12">
                        <input
                          value={filter}
                          onChange={this.handleChange}
                          type="text"
                          className="search-query form-control searchB"
                          placeholder="Search for a movie..."
                        />
                        ​
                        <span className="input-group-btn">
                          <button className="btn btn-danger" type="button">
                            <span>
                              <FontAwesomeIcon icon={faSearch} color="white" />
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-3">
                    <div className="row sortDiv mr-2">
                      <small className="pt-2" id="sortBy">
                        Filter By:
                      </small>
                      ​
                      <select
                        className="sortBySelect ml-4"
                        onChange={this.selectedFilterHandler}
                      >
                        <option value="none">None</option>
                        <option value="latest">Latest Added</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {existToWatch ? (
                    <div className="row">
                      {filteredData.map((movie, index) => (
                        <div key={index} className="col-md-3 mb-5">
                          <div>
                            <div className="moovieImg">
                              <img
                                className="moovieComponent"
                                alt="moovie"
                                src={movie.coverUrl}
                              />
                              <button
                                className="addToList"
                                onClick={() =>
                                  this.removeFromWatchlist(movie.id)
                                }
                              >
                                Remove
                              </button>
                              <button className="rating">
                                {movie.imdbScore}
                              </button>
                            </div>
                            <a href={"/movie-page/" + movie.id}>
                              <h5 id="moovieTitle">{movie.title}</h5>
                            </a>
                            <small>
                              {movie.category.map((cat, index) => {
                                return index > 0
                                  ? " • " + cat.name
                                  : " " + cat.name;
                              })}
                              <br />
                              Realeased date:{" "}
                              {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit"
                              }).format(movie.releaseDate)}{" "}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <h1>There are no movies in your watchlist!</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
  // }
}
export default WhatchList;
