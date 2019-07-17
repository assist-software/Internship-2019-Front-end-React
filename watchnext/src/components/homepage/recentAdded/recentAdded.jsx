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
    const { onClick, style } = this.props;
    return (
      <button
        style={{ ...style, display: "block" }}
        onClick={event => {
          onClick();
          this.props.nrDec();
        }}
        className="btn arrLeft mr-2"
      >
        <FontAwesomeIcon className="mb-2" icon={faArrowLeft} color="white" />
      </button>
    );
  }
}

class SampleNextArrow extends React.Component {
  render() {
    const { onClick, style } = this.props;
    return (
      <button
        className="btn arrRight"
        onClick={event => {
          onClick();
          this.props.nrInc();
        }}
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
      data: [],
      nr: 4
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

  nrIncrement() {
    if (this.state.nr < this.state.data.length) {
      this.setState({ nr: this.state.nr + 2 });
    } else {
      this.setState({ nr: 2 });
    }
  }

  nrDecrement() {
    if (this.state.nr > 2) {
      this.setState({ nr: this.state.nr - 2 });
    } else {
      this.setState({ nr: this.state.data.length });
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow nrInc={param => this.nrIncrement(param)} />,
      prevArrow: <SamplePrevArrow nrDec={param => this.nrDecrement(param)} />,
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
    const { data, nr } = this.state;
    return (
      <div className="pageMiddle">
        <div className="container h-100 py-5">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="hHeader">
                    Recent added movies
                    <span className="ml-4">
                      ({nr}/{data.length})
                    </span>
                  </h5>
                </div>
                <div className="col-md-6 text-right mt-4" />
              </div>

              <Slider {...settings}>
                {data.map((movie, index) => (
                  <Moovie key={index} movie={movie} />
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
