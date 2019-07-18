import React, { Component } from "react";
import "./addmoovie.css";
import { Form } from "react-bootstrap";
import axios from "axios";

// eslint-disable-next-line no-useless-escape
const validUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class AddMoovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_title: null,
      trailer_url: null,
      original_source: null,
      cover_url: null,
      movie_description: null,
      movie_category: null,
      imdb_score: null,
      release_date: null,
      errors: {
        movie_title: "",
        trailer_url: "",
        original_source: "",
        cover_url: "",
        movie_description: "",
        movie_category: "",
        imdb_score: "",
        release_date: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "movie_title":
        errors.movie_title =
          value.length < 5
            ? "Movie title must be at least 5 characters long!"
            : "";
        break;
      case "trailer_url":
        errors.trailer_url = validUrl.test(value)
          ? ""
          : "Trailer URL is not valid!";
        break;
      case "original_source":
        errors.original_source = validUrl.test(value)
          ? ""
          : "Original Source URL is not valid!";
        break;
      case "cover_url":
        errors.cover_url = validUrl.test(value)
          ? ""
          : "Cover URL is not valid!";
        break;
      case "movie_description":
        errors.movie_description =
          value.length < 10
            ? "Movie description must be at least 10 characters long!"
            : "";
        break;
      case "movie_category":
        errors.movie_category =
          value.length < 1
            ? "Movie category must be at least 5 characters long!"
            : "";
        break;
      case "imdb_score":
        errors.imdb_score =
          value.length < 2
            ? "IMDB Score must be at least 2 characters long!"
            : "";
        break;
      case "release_date":
        errors.release_date =
          value.length < 6
            ? "Release date must be at least 6 characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const movies = {
      title: this.state.movie_title,
      description: this.state.movie_description,
      cover_url: this.state.cover_url,
      trailer_url: this.state.trailer_url,
      original_source: this.state.original_source,
      category: this.state.movie_category,
      imdb_score: this.state.imdb_score,
      release_date: this.state.release_date
    };

    if (validateForm(this.state.errors)) {
      axios.post(`http://localhost:3003/movies`, { movies }).then(res => {
        console.log(res);
        console.log(res.data);
      });
    } else {
      window.alert("Please fill in all fields!");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container addMovieContainer">
        <div className="col-md-12">
          <div className="row titleRow justify-content-center align-items-center">
            <h1 className="addTitle">Add Moovie</h1>
          </div>
          <Form onSubmit={this.handleSubmit} noValidate>
            <div className="row inputRow justify-content-center align-items-center">
              <div className="col-md-6">
                <Form.Group controlId="movie_title">
                  <Form.Text className="text-muted floatLeft">
                    Movie title
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="movie_title"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.movie_title.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.movie_title}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="trailer_url">
                  <Form.Text className="text-muted floatLeft">
                    Trailer URL
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="trailer_url"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.trailer_url.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.trailer_url}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="original_source">
                  <Form.Text className="text-muted floatLeft">
                    Original source
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="original_source"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.original_source.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.original_source}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="cover_url">
                  <Form.Text className="text-muted floatLeft">
                    Cover URL
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="cover_url"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.cover_url.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.cover_url}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="movie_description">
                  <Form.Text className="text-muted floatLeft">
                    Description
                  </Form.Text>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="movie_description"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.movie_description.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.movie_description}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-7">
                <Form.Group controlId="movie_category">
                  <Form.Text className="text-muted floatLeft">
                    Category
                  </Form.Text>
                  <Form.Control
                    as="select"
                    name="movie_category"
                    onChange={this.handleChange}
                    noValidate
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                  {errors.movie_category.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.movie_category}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-5">
                <Form.Group controlId="imdb_score">
                  <Form.Text className="text-muted floatLeft">
                    IMDB Score
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="imdb_score"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.imdb_score.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.imdb_score}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="release_date">
                  <Form.Text className="text-muted floatLeft">
                    Release date
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="release_date"
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.release_date.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.release_date}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row titleRow justify-content-center align-items-center">
              <input
                className="modalAddMoovie"
                type="submit"
                value="Add moovie"
              />
            </div>
          </Form>
          <div className="row justify-content-center align-items-center mt-2">
            <button data-dismiss="modal" className="modalCancelAdd">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMoovie;
