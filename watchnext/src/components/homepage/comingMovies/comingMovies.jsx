import React, { Component } from "react";
import "./comingMovies.css";
import Moovie from "../recentAdded/moovie/moovie";
import DatePickers from "../../datepicker/datepicker";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  DateTimeField
} from "react-bootstrap";
const j = [1, 2, 3, 4, 5, 6, 7, 8];

class comingMovies extends Component {
  state = {};

  render() {
    return (
      <div className="pageBottom">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h1 id="cNextMonth" className="pb-5">
                    See what movies are coming next month
                  </h1>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="row filterDiv">
                    <small className="pt-2" id="filterBy">
                      Filter By:
                    </small>

                    <select className="categorySelect ml-4">
                      <option>None</option>
                      <option>Action</option>
                      <option>Comedy</option>
                      <option>Horror</option>
                      <option>Fantasy</option>
                    </select>
                    <DatePickers />
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

export default comingMovies;
