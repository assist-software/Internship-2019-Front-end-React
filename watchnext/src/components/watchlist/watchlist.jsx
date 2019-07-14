import React, { Component } from "react";
import "./watchlist.css";
import Moovie from "../moovie/moovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/header";

const j = [1, 2, 3, 4, 5, 6, 7, 8];

class WhatchList extends Component {
  state = {};
  render() {
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
                  <div id="custom-search-input">
                    <div class="input-group col-md-12">
                      <input
                        type="text"
                        class="  search-query form-control"
                        placeholder="Search for a movie..."
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-danger" type="button">
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
                  {j.map(a => {
                    return <Moovie />;
                  })}
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
