import React, { Component } from "react";
import "./moovie.css";

class Moovie extends Component {
  // state = {
  //   movie: null
  // };
  // componentDidMount() {
  //   console.log(this.props);

  //   this.setState({ movie: this.props.movie });
  // }
  render() {
    const { movie } = this.props;

    return (
      <React.Fragment>
        {movie && (
          // <div className="col-md-3 mb-5">
          <div>
            <a href={"/movie-page/" + movie.id}>
              <div className="moovieImg">
                <img
                  className="moovieComponent"
                  alt="moovie"
                  src={movie.picture}
                />
                <button className="addToList">Add to watchlist</button>
                <button className="rating">{movie.imdb_score}</button>
              </div>
              <h5 id="moovieTitle">{movie.title}</h5>
            </a>
            <small>
              Realeased date: {movie.release_date} <br /> {movie.category}
            </small>
          </div>
          // </div>
        )}
      </React.Fragment>

      // {movie && movie.id && (
      //   <div className="col-md-3 mb-5">
      //   <div>
      //     <a href={"/movie-page/" + movie.id}>
      //       <div className="moovieImg">
      //         <img
      //           className="moovieComponent"
      //           alt="moovie"
      //           src={movie.picture}
      //         />
      //         <button className="addToList">Add to watchlist</button>
      //         <button className="rating">{movie.imdb_score}</button>
      //       </div>
      //       <h5 id="moovieTitle">{movie.title}</h5>
      //     </a>
      //     <small>
      //       Realeased date: {movie.release_date} <br /> {movie.category}
      //     </small>
      //   </div>
      // </div>)}
    );
  }
}

export default Moovie;
