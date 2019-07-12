import React, { Component } from "react";
import "./recentAdded.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Moovie from "./moovie/moovie";

const i = [1, 2, 3, 4];

class RecentAdded extends Component {
  state = {};
  render() {
    return (
      <div className="pageMiddle">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5>
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
                <div className="row ">
                  {i.map(a => {
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

export default RecentAdded;
