import React, { Component } from "react";
import "./updatemovie.css";
import { Form } from "react-bootstrap";
import axios from "axios";

// eslint-disable-next-line no-useless-escape
const validUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class UpdateMoovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      movie: [],
      isSubmitted: false,
      trailerUrl: null,
      originalSourceUrl: null,
      coverUrl: null,
      description: null,
      category: null,
      duration: null,
      imdbScore: null,
      director: null,
      writers: null,
      stars: null,
      releaseDate: null,
      errors: {
        title: "",
        trailerUrl: "",
        originalSourceUrl: "",
        coverUrl: "",
        description: "",
        category: "",
        duration: "",
        imdbScore: "",
        director: "",
        writers: "",
        stars: "",
        releaseDate: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "title":
        errors.title =
          value.length < 5
            ? "Movie title must be at least 5 characters long!"
            : "";
        break;
      case "trailerUrl":
        errors.trailerUrl = validUrl.test(value)
          ? ""
          : "Trailer URL is not valid!";
        break;
      case "originalSourceUrl":
        errors.originalSourceUrl = validUrl.test(value)
          ? ""
          : "Original Source URL is not valid!";
        break;
      case "coverUrl":
        errors.coverUrl = validUrl.test(value) ? "" : "Cover URL is not valid!";
        break;
      case "description":
        errors.description =
          value.length < 10
            ? "Movie description must be at least 10 characters long!"
            : "";
        break;
      case "category":
        errors.category =
          value.length < 1
            ? "Movie category must be at least 5 characters long!"
            : "";
        break;
      case "duration":
        errors.duration =
          value.duration < 5
            ? "Movie duration must be at least 2 characters long!"
            : "";
        break;
      case "imdbScore":
        errors.imdbScore =
          value.length < 2
            ? "IMDB Score must be at least 2 characters long!"
            : "";
        break;
      case "director":
        errors.director = value.length < 4 ? "Specify who's the director!" : "";
        break;
      case "writers":
        errors.writers = value.length < 8 ? "Specify who're the writers!" : "";
        break;
      case "stars":
        errors.stars = value.length < 8 ? "Specify who're the stars!" : "";
        break;
      case "releaseDate":
        errors.releaseDate =
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
      title: this.state.title,
      trailerUrl: this.state.trailerUrl,
      originalSourceUrl: this.state.originalSourceUrl,
      coverUrl: this.state.coverUrl,
      description: this.state.description,
      category: this.state.category,
      duration: this.state.duration,
      imdbScore: this.state.imdbScore,
      director: this.state.director,
      writers: this.state.writers,
      stars: this.state.stars,
      releaseDate: this.state.releaseDate
    };

    if (validateForm(this.state.errors)) {
      const token = localStorage.getItem("token");
      axios
        // eslint-disable-next-line no-useless-concat
        .put(
          `http://192.168.151.218:3000/api/movie/` + this.state.movie.id,
          movies,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        .then(res => {
          window.location.reload();
        });
    } else {
      window.alert("Please fill in all fields!");
    }
  };

  componentDidMount() {
    let catUrl = "http://192.168.151.218:3000/api/category";
    const token = localStorage.getItem("token");

    fetch(catUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ categories: data });
      });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedMovie) {
      this.setState({
        movie: newProps.selectedMovie,
        title: newProps.selectedMovie.title,
        trailerUrl: newProps.selectedMovie.trailerUrl,
        originalSourceUrl: newProps.selectedMovie.originalSourceUrl,
        coverUrl: newProps.selectedMovie.coverUrl,
        description: newProps.selectedMovie.description,
        category: newProps.selectedMovie.category,
        duration: newProps.selectedMovie.duration,
        imdbScore: newProps.selectedMovie.imdbScore,
        director: newProps.selectedMovie.director,
        writers: newProps.selectedMovie.writers,
        stars: newProps.selectedMovie.stars,
        releaseDate: newProps.selectedMovie.releaseDate
      });
    }
  }

  render() {
    const { errors, categories } = this.state;
    return (
      <div className="container updateMovieContainer">
        <div className="col-md-12">
          <div className="row updateTitleRow justify-content-center align-items-center">
            <h1 className="updateTitle">Update Moovie</h1>
          </div>
          <Form onSubmit={this.handleSubmit} noValidate>
            <div className="row updateInputRow justify-content-center align-items-center">
              <div className="col-md-6">
                <Form.Group controlId="title">
                  <Form.Text className="text-muted floatLeft">
                    Movie title
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="title"
                    onChange={this.handleChange}
                    value={this.state.title}
                    noValidate
                  />
                  {errors.title.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.title}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="trailerUrl">
                  <Form.Text className="text-muted floatLeft">
                    Trailer URL
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="trailerUrl"
                    onChange={this.handleChange}
                    value={this.state.trailerUrl || ""}
                    noValidate
                  />
                  {errors.trailerUrl.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.trailerUrl}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="originalSourceUrl">
                  <Form.Text className="text-muted floatLeft">
                    Original source
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="originalSourceUrl"
                    onChange={this.handleChange}
                    value={this.state.originalSourceUrl || ""}
                    noValidate
                  />
                  {errors.originalSourceUrl.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.originalSourceUrl}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="coverUrl">
                  <Form.Text className="text-muted floatLeft">
                    Cover URL
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="cover_url"
                    onChange={this.handleChange}
                    value={this.state.coverUrl || ""}
                    noValidate
                  />
                  {errors.coverUrl.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.coverUrl}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="description">
                  <Form.Text className="text-muted floatLeft">
                    Description
                  </Form.Text>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="description"
                    onChange={this.handleChange}
                    value={this.state.description || ""}
                    noValidate
                  />
                  {errors.description.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.description}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <Form.Group controlId="category">
                  <Form.Text className="text-muted floatLeft">
                    Category
                  </Form.Text>
                  <Form.Control
                    as="select"
                    name="category"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.category || ""}
                  >
                    <option value="">None</option>
                    {categories.map(cat => {
                      return <option key={cat.name}>{cat.name}</option>;
                    })}
                  </Form.Control>
                  {errors.category.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.category}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-3">
                <Form.Group controlId="duration">
                  <Form.Text className="text-muted floatLeft">
                    Duration
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="duration"
                    onChange={this.handleChange}
                    noValidate
                    value={this.state.duration || ""}
                  />
                  {errors.duration.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.duration}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-5">
                <Form.Group controlId="imdbScore">
                  <Form.Text className="text-muted floatLeft">
                    IMDB Score
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="imdbScore"
                    onChange={this.handleChange}
                    value={this.state.imdbScore || ""}
                    noValidate
                  />
                  {errors.imdbScore.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.imdbScore}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <Form.Group controlId="director">
                  <Form.Text className="text-muted floatLeft">
                    Director
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="director"
                    onChange={this.handleChange}
                    value={this.state.director || ""}
                    noValidate
                  />
                  {errors.director.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.director}
                    </span>
                  )}
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="releaseDate">
                  <Form.Text className="text-muted floatLeft">
                    Release date
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="releaseDate"
                    onChange={this.handleChange}
                    value={this.state.releaseDate || ""}
                    noValidate
                  />
                  {errors.releaseDate.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.releaseDate}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="writers">
                  <Form.Text className="text-muted floatLeft">
                    Writers
                  </Form.Text>
                  <Form.Control
                    type="text"
                    name="writers"
                    onChange={this.handleChange}
                    value={this.state.writers || ""}
                    noValidate
                  />
                  {errors.writers.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.writers}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-12">
                <Form.Group controlId="stars">
                  <Form.Text className="text-muted floatLeft">Stars</Form.Text>
                  <Form.Control
                    type="text"
                    name="stars"
                    onChange={this.handleChange}
                    value={this.state.stars || ""}
                    noValidate
                  />
                  {errors.stars.length > 0 && (
                    <span className="text-danger errorLabel">
                      {errors.stars}
                    </span>
                  )}
                </Form.Group>
              </div>
            </div>

            <div className="row updateTitleRow justify-content-center align-items-center">
              <input
                className="modalUpdateMoovie"
                type="submit"
                value="Update moovie"
              />
            </div>
          </Form>
          <div className="row justify-content-center align-items-center mt-2">
            <button
              data-dismiss="modal"
              className="modalCancelUpdate"
              onClick={() => this.props.closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateMoovie;
