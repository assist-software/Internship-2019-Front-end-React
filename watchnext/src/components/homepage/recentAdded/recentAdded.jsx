import React, { Component } from "react";
import "./recentAdded.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Moovie from "../../moovie/moovie";

class RecentAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nrOfMov: 4
    };
  }

  render() {
    return (
      <div className="pageMiddle">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="hHeader">
                    Recent added movies<span className="ml-4">(4/10)</span>
                  </h5>
                </div>
                <div className="col-md-6 text-right mt-4">
                  <button className="btn arrBtn mr-2">
                    <FontAwesomeIcon
                      className="mb-2"
                      icon={faArrowLeft}
                      color="white"
                    />
                  </button>
                  <button className="btn arrBtn">
                    <FontAwesomeIcon
                      className="mb-2"
                      icon={faArrowRight}
                      color="white"
                    />
                  </button>
                </div>
              </div>
              <div className="col-md-12">
                <Moovie nrOfMov={this.state.nrOfMov} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentAdded;
