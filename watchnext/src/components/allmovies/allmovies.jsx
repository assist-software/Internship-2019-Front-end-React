import React, { Component } from "react";
import "../watchlist/watchlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/header";
import Footer from "../footer/footer";

class AllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      filter: ""
    };
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

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
        this.setState({ data: data });
      });
  }

  render() {
    const { filter, data } = this.state;
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(this.state.filter);
    });

    return (
      <div className="whatchlist-content">
        <Header />
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h1 id="welcome" className="pb-5">
                    Look for a movie Your life is short.
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
                        placeholder="Search by category..."
                      />

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
                  <div className="row sortDiv">
                    <small className="pt-2" id="sortBy">
                      Filter By:
                    </small>

                    <select className="sortBySelect ml-4">
                      <option>Latest Added</option>
                      <option>Action</option>
                      <option>Comedy</option>
                      <option>Horror</option>
                      <option>Fantasy</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="row">
                    {filteredData.map((movie, index) => (
                      <div key={index} className="col-md-3 mb-5">
                        <div>
                          <a href={"/movie-page/" + movie.id}>
                            <div className="moovieImg">
                              <img
                                className="moovieComponent"
                                alt="moovie"
                                src={movie.coverUrl}
                              />
                              <button className="addToList">
                                Add to Watchlist
                              </button>
                              <button className="rating">
                                {movie.imdbScore}
                              </button>
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
                            <br /> {/* {movie.movie.category[1]} */}
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AllMovies;