import React, { Component } from "react";
import "./watchlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/header";

class WhatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: [],
      filteredData: [],
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    this.setState({
      filteredData: this.state.data.filter(movie => {
        movie.title.toString().includes(this.state.value);
      })
    });
  }

  componentDidMount() {
    let url = "http://localhost:3003/movies";

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  render() {
    const { data, filteredData } = this.state;
    this.state.filteredData = this.state.data;
    return (
      <div className="whatchlist-content">
        <Header />
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
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className="search-query form-control searchB"
                        placeholder="Search for a movie..."
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
                                src={movie.picture}
                              />
                              <button className="addToList">Remove</button>
                              <button className="rating">
                                {movie.imdb_score}
                              </button>
                            </div>
                            <h5 id="moovieTitle">{movie.title}</h5>
                          </a>
                          <small>
                            Realeased date: {movie.release_date} <br />{" "}
                            {movie.category}
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
      </div>
    );
  }
}

export default WhatchList;
