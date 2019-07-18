import React, { Component } from "react";
import "./movieDescription.css";
import { withRouter } from "react-router";

class MovieDescription extends Component {
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
        this.setState({ data: data[this.props.match.params.id - 1] });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="movieDescription-content">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img alt="moovie" className="movImage" src={data.coverUrl} />
                </div>
                <div className="text-center">
                  <a href="imdb.com">
                    <small className="seeSource">See original source</small>
                  </a>
                </div>
              </div>
              <div className="col-md-6 description">
                <h1 className="pt-2">{data.title}</h1>
                <img
                  alt="imdb"
                  className="imdbImage pl-3"
                  src={require("../../../assets/img/imdb.png")}
                />
                <div>
                  <small id="movieDet">
                    {data.category} • {data.length}
                  </small>
                </div>
                <div>
                  <h5 id="movieDes">{data.description}</h5>
                </div>
                <div>
                  <button className="addToWatch">Add to watchlist</button>
                </div>
                <div className="row movDet">
                  <div className="col-md-2">
                    <ul className="list-unstyled movDetList">
                      <li>Director</li>
                      <li>Writers</li>
                      <li className="mt-4">Stars</li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <ul className="list-unstyled movDetCont">
                      <li>{data.director}</li>
                      <li>{data.writers}</li>
                      <li>{data.stars}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDescription);
