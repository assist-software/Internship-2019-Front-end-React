import React, { Component } from "react";
import "./adminpage.css";
import AdminHeader from "./adminheader/adminheader";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddMoovie from "./addmoovie/addmoovie";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UpdateMoovie from "./updatemovie/updatemovie";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      filter: "",
      selectedMovieId: null,
      selectedMovie: null
    };
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  selectMovie(movieId, movie) {
    if (movie) {
      this.setState({
        selectedMovieId: movieId,
        selectedMovie: movie
      });
    } else {
      this.setState({
        selectedMovieId: movieId
      });
    }
  }

  closeModal() {
    this.setState({
      selectedMovieId: null,
      selectedMovieId: null
    });
  }

  deleteMovie() {
    const movieToDelete = this.state.selectedMovieId;
    axios.delete(`http://localhost:3003/movies/${movieToDelete}`).then(res => {
      const newData = this.state.data.filter(mov => {
        if (mov.id !== movieToDelete) {
          return mov;
        }
      });
      this.setState({ data: newData });
      this.closeModal();
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
    const { filter, data, selectedMovieId, selectedMovie } = this.state;
    const filteredData = data.filter(item => {
      return item.title.toLowerCase().includes(filter);
    });

    return (
      <div className="admin-content">
        <AdminHeader />
        <div className="container adminContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="searchBox" id="customSearchInput">
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
                className="modal fade bd-example-modal-lg"
                id="addMoovie"
                role="dialog"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content addNewContent">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
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
                  className="card flex-row flex-wrap mb-4 justify-content-center align-items-center"
                >
                  <div className="col-md-">
                    <img className="movImg" alt="moovie" src={movie.coverUrl} />
                  </div>
                  <div className="col-md-3">
                    <h1 className="movTit">{movie.title}</h1>
                  </div>
                  <div className="col-md-3">
                    <h2 className="movDat">{movie.releaseDate}</h2>
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
                        onClick={() => this.selectMovie(movie.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} color="#9C9B9B" />
                      </button>
                      <div
                        className="modal fade"
                        id="deleteMoovie"
                        role="dialog"
                      >
                        <div className="modal-dialog deleteDialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => this.closeModal()}
                              >
                                &times;
                              </button>
                            </div>
                            <div className="modal-body">
                              <p className="textModal">
                                Are you sure you want to delete this movie?
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="cancelModal"
                                data-dismiss="modal"
                                onClick={() => this.closeModal()}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="deleteMovieModal"
                                data-dismiss="modal"
                                onClick={() => this.deleteMovie()}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md- movAction">
                      <button
                        className="movBtn"
                        data-toggle="modal"
                        data-target="#updateMovie"
                        onClick={() => this.selectMovie(movie.id, movie)}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faPen} color="#9C9B9B" />
                      </button>
                      <div
                        className="modal fade bd-example-modal-lg"
                        id="updateMovie"
                        role="dialog"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content addNewContent">
                            <div className="modal-header">
                              <button
                                onClick={() => this.closeModal()}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                            </div>
                            <UpdateMoovie
                              closeModal={() => this.closeModal()}
                              selectedMovie={selectedMovie}
                            />
                          </div>
                        </div>
                      </div>
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
