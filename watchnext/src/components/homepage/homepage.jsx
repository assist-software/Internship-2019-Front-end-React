import React, { Component } from "react";
import RecentAdded from "./recentAdded/recentAdded";
import HeadMovie from "./headMovie/headMovie";
// import Top from "components/homepage/top/top";
import "../homepage/homepage.css";
import ComingMovies from "./comingMovies/comingMovies";
import Header from "../header/header";

class Home extends Component {
  state = {};

  nextPage = () => {
    console.log("Click happened");
  };

  render() {
    return (
      <div>
        <Header />

        <section id="top">
          <HeadMovie nextPage={this.nextPage} />
        </section>
        <section id="RecentAdded">
          <RecentAdded />
        </section>
        <section>
          <ComingMovies />
        </section>
      </div>
    );
  }
}

export default Home;
