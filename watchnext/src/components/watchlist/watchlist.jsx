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
      movies: [],
      data: [],
      filteredData: [],
      value: ""
    };
  }

  filterMovies = async event => {
    const result = this.state.data.filter(movie =>
      movie.title
        .toLocaleLowerCase()
        .includes(this.state.value.toLocaleLowerCase())
    );
    console.log(result);
    if (result.length > 0 || this.state.value) {
      this.setState({ filteredData: result, value: event.target.value });
    } else
      this.setState({
        filteredData: this.state.data,
        value: event.target.value
      });
  };

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
                        value={this.state.value}
                        onChange={this.filterMovies}
                        type="text"
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
        <Footer />
      </div>
    );
  }
}

export default WhatchList;
