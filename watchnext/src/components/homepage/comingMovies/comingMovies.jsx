import React, { Component } from "react";
import "./comingMovies.css";
import Moovie from "../../moovie/moovie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faListUl } from "@fortawesome/free-solid-svg-icons";
import Timeline from "../../timeline/timeline";

class comingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: [],
      date: null,
      isOpenPicker: false,
      isTimeline: false,
      isClicked: false
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

  timelineClick = value => {
    this.setState({
      isTimeline: value
    });
  };

  closePicker = () => {
    this.setState({
      isOpenPicker: false
    });
  };

  changeFilter = value => {
    this.setState({
      isClicked: value
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
    const { data, date, isOpenPicker, isTimeline } = this.state;
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
                  <div className="row filterDiv mr-1">
                    <small className="pt-2" id="filterBy">
                      Filter By:
                    </small>

                    <select
                      className={`categorySelect ${
                        isTimeline ? "timeline" : "gridline"
                      } ml-4`}
                    >
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
                        type="date"
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
                </div>{" "}
              </div>
              <div className="row switchRow mr-1 mt-2">
                <button
                  type="button"
                  className={
                    "btn mr-2 " + (isTimeline ? "btnSwitch" : "openedTimeline")
                  }
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Switch to Grid"
                  onClick={() => this.timelineClick(false)}
                >
                  <FontAwesomeIcon
                    icon={faTh}
                    color={isTimeline ? "#f5044c" : "#ffffff"}
                  />
                </button>
                <button
                  type="button"
                  className={
                    "btn " + (isTimeline ? "openedTimeline" : "btnSwitch")
                  }
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Switch to Timeline"
                  onClick={() => this.timelineClick(true)}
                >
                  <FontAwesomeIcon
                    icon={faListUl}
                    color={isTimeline ? "#ffffff" : "#f5044c"}
                  />
                </button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {isTimeline ? (
                  <Timeline />
                ) : (
                  <React.Fragment>
                    {data.map((movie, index) => (
                      <div key={index} className="col-md-3 mb-5">
                        <Moovie movie={movie} />
                      </div>
                    ))}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default comingMovies;
