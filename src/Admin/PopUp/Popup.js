import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './popup.css';
import { withRouter } from "react-router-dom";
import Dropdown from '../../dropdown/Dropdown'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false,
      isAdd: true,
      isDelete: false,
      genre: 'Action',
      genres: [
        {
          id: 0,
          title: 'Action',
          selected: false,
          key: 'location'
        },
        {
          id: 1,
          title: 'Comedy',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'Thriler',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Romance',
          selected: false,
          key: 'location'
        }
      ],
    }
  }

  updateGenre = (g) => {
    this.setState(() => {
      return {
        genre: g
      }
    })
  }


  onSubmit(event) {
    event.preventDefault();

    // custom form handling here
  }

  render() {
    const { isAdd, isUpdate, isDelete } = this.state
    return (
      <div id="blurAdminPage">

        {!isDelete && <div id="mainDialogAddMovie">
          <div id="closeButtonDiv">
            <FontAwesomeIcon icon={faTimes} id="closeButton" />
          </div>
          {isAdd && <h1 id="AddMovie"> Add movie </h1>}
          {isUpdate && <h1 id="AddMovie"> Update movie </h1>}
          {/* <h1 id = "AddMovie"> Add movie </h1> */}

          <div id="dialogContent">
            <form onSubmit={this.onSubmit}>

              <div id="Display">

                <div id="titleURL">
                  <label id="movieTitleText"> Movie title </label>
                  <input type="text" id="movieTitle" />
                </div>

                <div id="trailerURLdiv">
                  <label id="trailerURLText"> Trailer URL </label>
                  <input type="text" id="trailerURL" />
                </div>

              </div>

              <div id="originalSourceDiv">

                <label id="originalSourceText"> Original source </label>
                <input type="text" id="originalSourceInput" />

              </div>

              <div id="coverURLdiv">

                <label id="coverURLtext"> Cover URL </label>
                <input type="text" id="coverURLinput" />

              </div>

              <div id="descriptionDiv">

                <label id="descriptionText"> Description </label>

                <textarea type="text" id="descriptionInput" />


              </div>

              <div id="Display">

                <div id="category">
                  <label id="categoryText"> Category </label>
                  {/* <input type = "text" id = "categoryInput"/> */}
                  <Dropdown list={this.state.genres} gen={this.state.genre} ug={this.updateGenre} />
                </div>

                <div id="imdbScoreDiv">
                  <label id="imdbScoreText"> IMDB Score </label>
                  <input type="text" id="imdbScoreInput" />
                </div>

              </div>

              <div id="releaseDateDiv">

                <label id="releaseDatetext"> Cover URL </label>
                <input type="text" id="releaseDateLinput" />

              </div>

            </form>

            <div id="addMovieButton">

              <input type="button" className="addMovieButton" value="Add movie" />

            </div>

            <p id="cancelButton"> Cancel </p>

          </div>

        </div>}

        {isDelete &&

          <div id="mainDialogAddMovieDelete">
            <div id="dialogContentDelete">
              <h1 id="AddMovie"> Are you sure you want <br /> to delete this movie? </h1>

              <div id="buttonsDiv">
                <input type="button" id="cancelButton" value="Cancel" />

                <input type="button" id="deleteButton" value="Delete" />

              </div>
            </div>
          </div>

        }

      </div>
    )
  }
}

export default withRouter(Popup);