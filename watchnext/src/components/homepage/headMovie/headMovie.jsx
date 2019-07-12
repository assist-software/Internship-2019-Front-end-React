import React, { Component } from "react";
import "./headMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class headMovie extends Component {
  state = {};

  render() {
    const scrollToMiddle = this.props;
    return (
      <div className="pageTop">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-7">
              <h1>Moonlight</h1>
              <h3 className="mt-4">
                A chronicle of the childhood, adolescence and burgeoning
                adulthood of a young, African-American, gay man growing up in a
                rough neighborhood of Miami.
              </h3>
              <div className="btnGroup mt-5">
                <button className="watchTrailer">Watch trailer</button>
                <button className="ml-3 addTo">
                  <FontAwesomeIcon className="mr-3" icon={faPlus} />
                  Add to list
                </button>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img
                className="moovieImage"
                src={require("../../../assets/img/moovie_image.png")}
              />
            </div>
            <div className="nextPage text-center mb-3">
              <button onClick={this.props.scrollToMiddle} className="btn">
                <FontAwesomeIcon
                  className="mb-2"
                  icon={faArrowDown}
                  color="white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default headMovie;
