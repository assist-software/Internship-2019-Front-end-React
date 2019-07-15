import React, { Component } from "react";
import "./adminpage.css";
import AdminHeader from "./adminheader/adminheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./moviecard/moviecard";
import AddMoovie from "./addmoovie/addmoovie";

class AdminPage extends Component {
  state = {};

  render() {
    return (
      <div className="admin-content">
        <AdminHeader />
        <div className="container adminContainer">
          <div className="row">
            <div className="col-md-6">
              <div class="searchBox" id="customSearchInput">
                <div className="input-group col-md-12">
                  <input
                    type="text"
                    className="search-query form-control searchX"
                    placeholder="Search for a movie..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button">
                      <span>
                        <FontAwesomeIcon icon={faSearch} color="#9C9B9B" />
                      </span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <button
                className="addNew mt-3"
                data-toggle="modal"
                data-target="#addMoovie"
              >
                Add new
              </button>
              <div
                class="modal fade bd-example-modal-lg"
                id="addMoovie"
                role="dialog"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content addNewContent">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <AddMoovie />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-moovies">
            <MovieCard loadMore={this.loadMore} />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
