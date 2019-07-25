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
      loaded: false,
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
      title: '',
      trailerUrl: '',
      originalSourceUrl: '',
      description: '',
      imdbScore: '',
      coverUrl: '',
      releaseDate: '',
      category: '',
      titleErr: false,
      trailerErr: false,
      sourceErr: false,
      catErr: false,
      imdbscoreErr: false,
      releaseDateErr:false
    }
  }

  updateGenre = (g) => {
    this.setState(() => {
      return {
        genre: g
      }
    })
  }


  checkErrors = () => {
    const { title, trailerUrl, originalSourceUrl, coverUrl, description, imdbScore, releaseDate, category } = this.state
    let err = false

    // console.log(title, trailerUrl, originalSourceUrl, coverUrl, description, imdbScore, releaseDate, category)

    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    this.setState({ releaseDateErr: releaseDate == "" || releaseDate == undefined || !releaseDate.match(regEx)})
    if (releaseDate == "" || releaseDate == undefined || !releaseDate.match(regEx)) {
      err = true
    }

    this.setState({ titleErr: title == "" || title == undefined })
    if (title == "" || title == undefined) {
      err = true
    }

    this.setState({ trailerErr: trailerUrl == "" || trailerUrl == undefined })
    if (trailerUrl == "" || trailerUrl == undefined) {
      err = true
    }

    this.setState({ sourceErr: originalSourceUrl == "" || originalSourceUrl == undefined })
    if (originalSourceUrl == "" || originalSourceUrl == undefined) {
      err = true
    }

    this.setState({ catErr: category == "" || category == undefined })
    if (category == "" || category == undefined) {
      err = true
    }

    this.setState({ imdbscoreErr: imdbScore != '' && imdbScore != undefined && parseInt(imdbScore) && !(imdbScore>-1 && imdbScore<11)})
    if (imdbScore != '' && imdbScore != undefined && parseInt(imdbScore) && !(imdbScore>-1 && imdbScore<11) ) {
      err = true

    }

    return err
  }

  addMovie = (event) => {
    const { title, trailerUrl, originalSourceUrl, coverUrl, description, imdbScore, releaseDate, category } = this.state
    if(this.checkErrors()) return

    var data = {
      "title": title,
      "trailerUrl": trailerUrl,
      "originalSourceUrl": originalSourceUrl,
      "coverUrl": coverUrl,
      "imdbId": "",
      "imdbScore": imdbScore,
      "description": description,
      "releaseDate": releaseDate,
      "category": api.base == "local" ? category.split(",").map(item => item) : category
    };

    fetch(api.addMovie,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => this.close())
  }

  updateMovie = (event) => {
    let { title, trailerUrl, originalSourceUrl, coverUrl, description, imdbScore, releaseDate, category } = this.state

    title = title == '' ? this.props.item.title : title
    trailerUrl = trailerUrl == '' ? this.props.item.trailerUrl : trailerUrl
    originalSourceUrl = originalSourceUrl == '' ? this.props.item.originalSourceUrl : originalSourceUrl
    coverUrl = coverUrl == '' ? this.props.item.coverUrl : coverUrl
    description = description == '' ? this.props.item.description : description
    imdbScore = imdbScore == '' ? this.props.item.imdbScore : imdbScore
    releaseDate = releaseDate == '' ? this.props.item.releaseDate : releaseDate
    category = category == '' ? this.props.item.category : category
    
    this.setState({
      title,
      trailerUrl,
      originalSourceUrl,
      coverUrl,
      description,
      imdbScore,
      releaseDate,
      category
    }, () => {
      if(this.checkErrors()) return
      
      
      var data = {
        "title": title,
        "trailerUrl": trailerUrl,
        "originalSourceUrl": originalSourceUrl,
        "coverUrl": coverUrl,
        "imdbId": "",
        "imdbScore": imdbScore,
        "description": description,
        "releaseDate": releaseDate,
        "category": api.base == "local" ? (category.includes(",")?category.split(",").map(item => item) : category) : category
      };
  
      fetch(api.editMovie + this.props.item.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => this.close())
    });
  }

  handleChange = (value, name) => this.setState({[name]: value})

  close = () => {
    this.props.updatePopupVisibility(false)
    this.setState({ 
      title: '',
      trailerUrl: '',
      originalSourceUrl: '',
      description: '',
      imdbScore: '',
      coverUrl: '',
      releaseDate: '',
      category: '',
      titleErr: false,
      trailerErr: false,
      sourceErr: false,
      catErr: false,
      imdbscoreErr: false,
      releaseDateErr:false
    })
    this.props.refreshList()
  }

  handValue = (name) =>{
    if (this.props.popup_id == 2 ){   
      if(this.state[name] == '' ){
        //this.setState({[name]:this.props.item[name]})
        return this.props.item[name] 
      }else{
        return this.state[name]
      }
    }else{
      return this.state[name]
    }
  }

  render() {
    return (<div>
      {this.props.visible && <div id="blurAdminPage" onClick={() => this.props.ans(false)}></div>}

      {this.props.visible && this.props.popup_id != 3 && <div id="mainDialogAddMovie">
        <div id="closeButtonDiv">
          <FontAwesomeIcon icon={faTimes} id="closeButton" onClick={() => this.close()} />
        </div>
        {this.props.popup_id == 1 && <h1 id="AddMovie"> Add movie </h1>}
        {this.props.popup_id == 2 && <h1 id="AddMovie"> Update movie </h1>}

        <div id="dialogContent" ref="pop">
          <form onSubmit={this.addMovie}>

            <div id="Display">
              <div id="titleURL">
                <label id="movieTitleText"> Movie title <span id="reqred">*</span></label>
                <input type="text" autoComplete="off" id="movieTitle" className={this.state.titleErr ? "ierr" : "ok"} name="title" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('title')} />
              </div>

              <div id="trailerURLdiv">
                <label id="trailerURLText"> Trailer URL <span id="reqred">*</span></label>
                <input type="text" autoComplete="off" id="trailerURL" className={this.state.trailerErr ? "ierr" : "ok"} name="trailerUrl" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('trailerUrl')}/>
              </div>
            </div>

            <div id="originalSourceDiv">
              <label id="originalSourceText"> Original source <span id="reqred">*</span></label>
              <input type="text" autoComplete="off" id="originalSourceInput" className={this.state.sourceErr ? "ierr" : "ok"} name="originalSourceUrl" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('originalSourceUrl')}/>
            </div>

            <div id="coverURLdiv">
              <label id="coverURLtext"> Cover URL </label>
              <input type="text" autoComplete="off" id="coverURLinput" name="coverUrl" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('coverUrl')}/>
            </div>

            <div id="descriptionDiv">
              <label id="descriptionText"> Description </label>
              <textarea type="text" id="descriptionInput" name="description" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('description')}/>
            </div>

            <div id="Display">
              <div id="category">
                <label id="categoryText"> Category <span id="reqred">*</span></label>
                <input type="text" autoComplete="off" id="imdbScoreInput" className={this.state.catErr ? "ierr" : "ok"} name="category" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('category')}/>
              </div>

              <div id="imdbScoreDiv">
                <label id="imdbScoreText"> IMDB Score </label>
                <input type="text" autoComplete="off" id="imdbScoreInput" className={this.state.imdbscoreErr ? "ierr" : "ok"} name="imdbScore" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('imdbScore')}/>
              </div>
            </div>

            <div id="releaseDateDiv">
              <label id="releaseDatetext"> Release date <span id="reqred">*</span></label>
              <input type="text" autoComplete="off" id="releaseDateLinput" className={this.state.releaseDateErr ? "ierr" : "ok"}name="releaseDate" onChange={e => this.handleChange(e.target.value, e.target.name)} value={this.handValue('releaseDate')}/>
            </div>

          </form>

          <div id="addMovieButton">
            <input type="submit" className="addMovieButton" value="Add movie" onClick={() => this.props.popup_id == 1 ? this.addMovie() : this.updateMovie()} />
          </div>

          <p id="cancelButton" onClick={() => this.close()}> Cancel </p>

        </div>

      </div>}

      {this.props.visible && this.props.popup_id == 3 &&

        <div id="mainDialogAddMovieDelete">
          <div id="closeButtonDiv">
            <FontAwesomeIcon icon={faTimes} id="closeButton" onClick={() => this.close()} />
          </div>
          <div id="dialogContentDelete">
            <h1 id="delete"> Are you sure you want <br /> to delete this movie? </h1>

            <div id="buttonsDiv">
              <input type="button" id="cancelButton" value="Cancel" onClick={() => this.props.ans(false)} />

              <input type="button" id="deleteButton" value="Delete" onClick={() => this.props.ans(true)} />

            </div>
          </div>
        </div>

      }
    </div>

    )

  }
}

export default withRouter(Popup);