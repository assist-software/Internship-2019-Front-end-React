import React, { Component } from "react";
import "./signup.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div className="signupContent">
        <div className="row headBar">
          <svg
            width="400"
            height="180"
            viewBox="0 0 375 169"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M1 107.101C24.2 118.301 187.029 137.625 249.029 155.291C282.196 164.958 357.629 178.491 394.029 155.291C439.529 126.291 401.029 88.2913 394.029 43.7913C387.029 -0.708679 388.5 -38.3988 300.029 -30.2087C211.758 -22.0372 249.029 -45.7087 160.529 -73.2087C72.0289 -100.709 -56.4711 -38.7087 -39.4711 5.79132C-22.4711 50.2913 -28 93.1012 1 107.101Z"
              fill="#4B2B5F"
            />
            <path
              d="M1 -19C24.2 -30.2 187.029 -49.5234 249.029 -67.1901C282.196 -76.8567 357.629 -90.3901 394.029 -67.1901C439.529 -38.1901 401.029 -0.190079 394.029 44.3099C387.029 88.8099 388.5 126.5 300.029 118.31C211.758 110.138 249.029 133.81 160.529 161.31C72.0289 188.81 -56.4711 126.81 -39.4711 82.3099C-22.4711 37.8099 -28 -5 1 -19Z"
              fill="#4B2B5F"
            />
          </svg>
        </div>
        <div className="container">
          <div className="col-md-12">
            <div className="signUpRow row">
              <TextField
                label="First Name"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
            <div className="credRow row">
              <TextField
                label="Last Name"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
            <div className="credRow row">
              <TextField
                label="Email Address"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
            <div className="credRow row">
              <TextField
                label="Password"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
            <div className="credRow row">
              <TextField
                label="Confirm password"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
            <div className="credRow row">
              <TextField
                label="Birthday"
                id="mui-theme-provider-standard-input"
                className="signUpCredentials"
              />
            </div>
          </div>
          <div className="signUpButton row">
            <Button
              variant="contained"
              color="primary"
              className="submitSignUp"
            >
              Register
            </Button>
          </div>
          <div className="row mt-3 logRow">
            <span className="logAct mr-3">Have already an account?</span>
            <button
              type="button"
              class="btn btn-link logLink"
              onClick={this.props.showSignIn}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
