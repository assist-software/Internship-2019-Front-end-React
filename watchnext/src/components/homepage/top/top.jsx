import React, { Component } from "react";
import "./top.css";
import Grid from "@material-ui/core/Grid";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Middle from "../middle/middle";

class Top extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-7 text-center">
              <h1>Moonlight</h1>
              <h3 className="mt-4">
                A chronicle of the childhood, adolescence and burgeoning
                adulthood of a young, African-American, gay man growing up in a
                rough neighborhood of Miami.
              </h3>
              <div fullWidth className="btnGroup mt-5">
                <button className="watchTrailer">Watch trailer</button>
                <button className="ml-3 addTo">
                  <i className="fa fa-plus mr-3" />
                  Add to list
                </button>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src={require("../../../assets/img/moovie_image.png")} />
            </div>
            <div className="nextPage text-center mb-3">
              <a href="">
                <i class="fa fa-arrow-down" />
                <Link to="Middle" />
              </a>
              <Middle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
