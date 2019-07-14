import React, { Component } from "react";
import RecentAdded from "./recentAdded/recentAdded";
import HeadMovie from "./headMovie/headMovie";
// import Top from "components/homepage/top/top";
import "../homepage/homepage.css";
import ComingMovies from "./comingMovies/comingMovies";
import Header from "../header/header";

class Home extends Component {
  state = {};

  handleClick = () => {
    console.log("Click happened");
  };

  render() {
    return (
      <div>
        <Header />

        <section id="top">
          <HeadMovie handleClick={this.handleClick} />
        </section>
        <section>
          <RecentAdded />
        </section>
        <section>
          <ComingMovies />
        </section>

        {/* <Middle /> */}
      </div>
    );
  }
}

export default Home;
