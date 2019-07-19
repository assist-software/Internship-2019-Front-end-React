import React, { Component } from "react";
import "./headMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class headMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: []
    };
  }

  componentDidMount() {
    let url = "http://192.168.151.218:3000/api/movies";
    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data[data.length - 1] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="hero-content">
        <div className="container py-4">
          <div className="row justify-content-center align-items-center hero-row">
            <div className="col-md-6">
              <div className="row headTitle">
                <div>
                  <h5 className="heroTitle">{data.title}</h5>
                </div>
                <div className="mt-4">
                  <h3 className="heroDescription">{data.description}</h3>
                </div>
                <div className="mt-5">
                  <button className="heroWatchButton">Watch trailer</button>
                  <button className="heroAddButton ml-3">
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="white"
                      className="mr-3"
                    />
                    Add to list
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className="heroImageDiv">
                <img className="heroImage" src={data.coverUrl} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <button className="btn nextPage" onClick={this.props.nextPage}>
              <a href="#RecentAdded">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  color="white"
                  className="mt-5"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default headMovie;
