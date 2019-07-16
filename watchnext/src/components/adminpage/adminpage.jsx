import React, { Component } from "react";
import "./adminpage.css";
import AdminHeader from "./adminheader/adminheader";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddMoovie from "./addmoovie/addmoovie";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

class AdminPage extends Component {
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
    let url = "http://localhost:3003/movies";
    fetch(url)
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
      <div className="admin-content">
        <AdminHeader />
        <div className="container adminContainer">
          <div className="row">
            <div className="col-md-6">
              <div class="searchBox" id="customSearchInput">
                <div className="input-group col-md-12">
                  <input
                    onChange={this.handleChange}
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
            <div className="col-md-12">
              {filteredData.map((movie, index) => (
                <div
                  key={index}
                  class="card flex-row flex-wrap mb-4 justify-content-center align-items-center"
                >
                  <div className="col-md-">
                    <img className="movImg" alt="moovie" src={movie.picture} />
                  </div>
                  <div className="col-md-3">
                    <h1 class="movTit">{movie.title}</h1>
                  </div>
                  <div className="col-md-3">
                    <h2 class="movDat">{movie.release_date}</h2>
                  </div>
                  <div className="col-md-3">
                    <h2 className="movDat">{movie.category}</h2>
                  </div>
                  <div className="col-md- mAction">
                    <div className="col-md- movAction">
                      <button
                        className="movBtn"
                        data-toggle="modal"
                        data-target="#deleteMoovie"
                      >
                        <FontAwesomeIcon icon={faTrash} color="#9C9B9B" />
                      </button>
                      <div class="modal fade" id="deleteMoovie" role="dialog">
                        <div class="modal-dialog deleteDialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                            </div>
                            <div class="modal-body">
                              <p class="textModal">
                                Are you sure you want to delete this movie?
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="cancelModal"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="deleteMovieModal"
                                data-dismiss="modal"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md- movAction">
                      <button className="movBtn">
                        {" "}
                        <FontAwesomeIcon icon={faPen} color="#9C9B9B" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminPage;
