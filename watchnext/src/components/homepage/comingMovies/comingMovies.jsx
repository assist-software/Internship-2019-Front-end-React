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
      categories: [],
      date: null,
      timestampDate: null,
      isOpenPicker: false,
      isTimeline: false,
      isClicked: false,
      selectedCategory: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      date
    });

    const timestampDate = date.getTime();
    console.log(timestampDate);

    let url =
      "http://192.168.151.218:3000/api/movie/query?from=" + timestampDate;

    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message !== "Empty") {
          this.setState({ data: data });
        } else window.alert("empty");
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

  selectedCategoryHandler = event => {
    event.preventDefault();
    const cat = event.target.value;
    this.setState({ selectedCategory: cat });
    let url = "http://192.168.151.218:3000/api/movies-category/" + cat;

    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data.movies });
      });
  };

  componentDidMount() {
    let catUrl = "http://192.168.151.218:3000/api/category";
    let url = "http://192.168.151.218:3000/api/movies/";
    const token = localStorage.getItem("token");
    var today = new Date();

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          data: data.filter(mov => {
            if (mov.releaseDate > today.getTime()) return mov;
          })
        });
      });

    fetch(catUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ categories: data });
      });
  }

  render() {
    const { data, date, isOpenPicker, isTimeline, categories } = this.state;
    return (
      <React.Fragment>
        {data && (
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
                          onChange={this.selectedCategoryHandler}
                        >
                          <option value="none">None</option>
                          {categories &&
                            categories.map(cat => {
                              return (
                                <option key={cat.id} value={cat.id}>
                                  {cat.name}
                                </option>
                              );
                            })}
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
                        "btn mr-2 " +
                        (isTimeline ? "btnSwitch" : "openedTimeline")
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
        )}
      </React.Fragment>
    );
  }
}

export default comingMovies;
