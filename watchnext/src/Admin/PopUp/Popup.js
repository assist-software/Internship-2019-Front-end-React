import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import './popup.css';
import { withRouter } from "react-router-dom";
import api from "../../api-connection.js"

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      title:'',
      trailer:'',
      source:'',
      cover:'',
      description:'',
      imdbscore:'',
      coverUrl:'',
      releaseDate:'',
      categories: ''

    }
  }

  updateGenre = (g) => {
    this.setState(() => {
      return {
        genre: g
      }
    })
  }

  addMovie = (event) => {
    const {title,trailer,source,coverUrl,description,imdbscore,releaseDate,categories} = this.state
    let err = false 
    if(title.length<3||trailer.length<3||source.length<3||coverUrl.length<3
      ||description.length<3||(imdbscore<0 || imdbscore > 10 || !parseInt(imdbscore))||releaseDate.length<3||categories.length<3) err = true
    
      var data = {
        "title": title,
        "trailerUrl": trailer,
        "originalSourceUrl": source,
        "coverUrl": coverUrl,
        "imdbId": "",
        "imdbScore": imdbscore,
        "description": description,
        "releaseDate": releaseDate,
        "category": categories
      };
      
      fetch(api.addMovie,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
        .then(response => alert(JSON.stringify(data)))
  }

  handleChange = (value,name) => this.setState({[name]:value})
   
  render() {

    return (<div>
      {this.props.visible && <div id="blurAdminPage" onClick={()=>this.props.ans(false)}></div>}

        {this.props.visible && this.props.popup_id!=3 && <div id="mainDialogAddMovie">
          <div id="closeButtonDiv">
            <FontAwesomeIcon icon={faTimes} id="closeButton" onClick={()=>this.props.updatePopupVisibility(false)} />
          </div>
          {this.props.popup_id == 1 && <h1 id="AddMovie"> Add movie </h1>}
          {this.props.popup_id == 2 && <h1 id="AddMovie"> Update movie </h1>}
          {/* <h1 id = "AddMovie"> Add movie </h1> */}

          <div id="dialogContent">
            <form onSubmit={this.addMovie}>

              <div id="Display">
                <div id="titleURL">
                  <label id="movieTitleText"> Movie title </label>
                  <input type="text" id="movieTitle" name="title" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
                </div>

                <div id="trailerURLdiv">
                  <label id="trailerURLText"> Trailer URL </label>
                  <input type="text" id="trailerURL" name="trailer" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
                </div>
              </div>

              <div id="originalSourceDiv">
                <label id="originalSourceText"> Original source </label>
                <input type="text" id="originalSourceInput"  name="source" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
              </div>

              <div id="coverURLdiv">
                <label id="coverURLtext"> Cover URL </label>
                <input type="text" id="coverURLinput"  name="coverUrl" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
              </div>

              <div id="descriptionDiv">
                <label id="descriptionText"> Description </label>
                <textarea type="text" id="descriptionInput"   name="description" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
              </div>

              <div id="Display">
                <div id="category">
                  <label id="categoryText"> Category </label>
                  <input type="text" id="imdbScoreInput" name="categories" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
                </div>

                <div id="imdbScoreDiv">
                  <label id="imdbScoreText"> IMDB Score </label>
                  <input type="text" id="imdbScoreInput" name="imdbscore" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
                </div>
              </div>

              <div id="releaseDateDiv">
                <label id="releaseDatetext"> Release date </label>
                <input type="text" id="releaseDateLinput" name="releaseDate" onChange={e=>this.handleChange(e.target.value,e.target.name) } />
              </div>

            </form>

            <div id="addMovieButton">
              <input type="submit" className="addMovieButton" value="Add movie" onClick={()=>this.addMovie()}/>
            </div>

            <p id="cancelButton" onClick={()=>this.props.updatePopupVisibility(false)}> Cancel </p>

          </div>

        </div>}

        {this.props.visible && this.props.popup_id==3 &&

          <div id="mainDialogAddMovieDelete">
          <div id="closeButtonDiv">
          <FontAwesomeIcon icon={faTimes} id="closeButton" onClick={()=>this.props.updatePopupVisibility(false)} />
          </div>
            <div id="dialogContentDelete">
              <h1 id="delete"> Are you sure you want <br /> to delete this movie? </h1>

              <div id="buttonsDiv">
                <input type="button" id="cancelButton" value="Cancel" onClick={()=>this.props.ans(false)}/>

                <input type="button" id="deleteButton" value="Delete" onClick={()=>this.props.ans(true)}/>

              </div>
            </div>
          </div>

        }
        </div>
      
    )
    
  }
}

export default withRouter(Popup);