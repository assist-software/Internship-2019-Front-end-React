import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-3 mb-5">
        <div className="moovieImg">
          <img
            className="moovieComponent"
            alt="moovie"
            src={require("../../assets/img/moovie2.png")}
          />
          <button className="addToList">Add to watchlist</button>
          <button className="rating">8.2</button>
        </div>

        <h5 id="moovieTitle">Godzilla Kind of the Monsters</h5>
        <small>
          Realeased date: 20/03/2019 <br /> Action • Drama
        </small>
      </div>
    );
  }
}

export default Moovie;
