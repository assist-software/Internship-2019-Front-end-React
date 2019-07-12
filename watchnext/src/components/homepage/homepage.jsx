import React, { Component } from "react";
import Middle from "./middle/middle";
import Top from "components/homepage/top/top";
import { Link, animateScroll as scroll } from "react-scroll";

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
        <Top scrollToMiddle={this.scrollToMiddle} />
        <Middle id="middle" />
      </div>
    );
  }
}

export default Home;
