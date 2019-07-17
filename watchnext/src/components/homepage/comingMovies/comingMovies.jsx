import React, { Component } from "react";
import "./comingMovies.css";
import Moovie from "../../moovie/moovie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class comingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: [],
      date: null,
      isOpenPicker: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      date
    });
  };

  openPicker = () => {
    this.setState({
      isOpenPicker: true
    });
  };

  closePicker = () => {
    this.setState({
      isOpenPicker: false
    });
  };

  componentDidMount() {
    let url = "http://localhost:3003/movies";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data.slice(0, 8) });
      });
  }

  render() {
    const { data, date, isOpenPicker } = this.state;
    return (
      <div className="pageBottom">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row comingRow">
                <div className="col-md-5">
                  <h1 id="cNextMonth" className="pb-5">
                    See what movies are coming next month
                  </h1>
                </div>
                <div className="col-md-7 mt-3">
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
                    <div className="date-picker">
                      <div className="input-group-addon">
                        <i
                          className="fa fa-calendar-times-o calendarIcon"
                          id="timer-a"
                        >
                          {" "}
                        </i>
                      </div>

                      <DatePicker
                        onInputClick={this.openPicker}
                        onClickOutside={this.closePicker}
                        onChange={this.handleChange}
                        onSelect={this.closePicker}
                        selected={date}
                        placeholderText="Any date"
                      />
                      <div className="input-group-addon">
                        <i
                          className={`arrowIc fa fa-angle-${
                            isOpenPicker ? "up" : "down"
                          }`}
                          id="timer-b"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  {data.map((movie, index) => (
                    <div key={index} className="col-md-3 mb-5">
                      <Moovie movie={movie} />
                    </div>
                  ))}
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
