import React, { Component } from "react";
import RecentAdded from "./recentAdded/recentAdded";
import HeadMovie from "./headMovie/headMovie";
// import Top from "components/homepage/top/top";
import "../homepage/homepage.css";
import ComingMovies from "./comingMovies/comingMovies";

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollToMiddle = this.scrollToMiddle.bind(this);
  }

  state = {};

  scrollToMiddle = () => {};

  render() {
    return (
      <div>
        {/* <Top scrollToMiddle={this.scrollToMiddle} /> */}
        <section id="top">
          <HeadMovie />
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
