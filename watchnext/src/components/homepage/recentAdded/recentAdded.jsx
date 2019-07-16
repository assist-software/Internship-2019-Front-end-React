import React, { Component } from "react";
import "./recentAdded.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Moovie from "../../moovie/moovie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SamplePrevArrow extends React.Component {
  render() {
    const { onClick, style, nrIncrement } = this.props;
    return (
      <button
        style={{ ...style, display: "block" }}
        onClick={onClick}
        onClickCapture={nrIncrement}
        className="btn arrLeft mr-2"
      >
        <FontAwesomeIcon className="mb-2" icon={faArrowLeft} color="white" />
      </button>
    );
  }
}

class SampleNextArrow extends React.Component {
  render() {
    const { onClick, style, nrIncrement } = this.props;
    return (
      <button
        className="btn arrRight"
        onClick={onClick}
        onClickCapture={nrIncrement}
        style={{ ...style, display: "block" }}
      >
        <FontAwesomeIcon className="mb-2" icon={faArrowRight} color="white" />
      </button>
    );
  }
}

class RecentAdded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      data: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3003/movies";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
      });
  }

  nrIncrement = nr => {
    nr += 2;
  };

  render() {
    let nr = 4;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow nrInc={this.nrIncrement(nr)} />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { data } = this.state;
    return (
      <div className="pageMiddle">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="hHeader">
                    Recent added movies<span className="ml-4">({nr}/10)</span>
                  </h5>
                </div>
                <div className="col-md-6 text-right mt-4" />
              </div>

              <Slider {...settings}>
                {data.map((movie, index) => (
                  <Moovie movie={movie} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="App" />
      </div>
    );
  }
}

export default RecentAdded;
