import React, { Component } from "react";
import "./comingMovies.css";
import Moovie from "../../moovie/moovie";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const j = [1, 2, 3, 4, 5, 6, 7, 8];

class comingMovies extends Component {
 // state = {};
 constructor (props) {
  super(props)
  this.state = {
    startDate: moment()
  };
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

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

                    <DatePicker selected={this.state.date}
                      onSelect={this.handleSelect} 
                      onChange={this.handleChange }
                    />

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
