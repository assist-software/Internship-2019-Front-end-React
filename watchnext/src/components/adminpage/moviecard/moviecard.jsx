import React, { Component } from "react";
import "./moviecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

class MovieCard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div class="card flex-row flex-wrap mb-4 justify-content-center align-items-center">
            <div className="col-md-">
              <img
                className="movImg"
                alt="moovie"
                src={require("../../../assets/img/moovie2.png")}
              />
            </div>
            <div className="col-md-3">
              <h1 class="movTit">Fantastic Beasts</h1>
            </div>
            <div className="col-md-3">
              <h2 class="movDat">20/04/04.2019</h2>
            </div>
            <div className="col-md-3">
              <h2 className="movDat">Fantasy • Adventure</h2>
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
        </div>
      </div>
    );
  }
}

export default MovieCard;
