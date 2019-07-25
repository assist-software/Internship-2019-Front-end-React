import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import createApiRequest from "../../api";
import "./register.css";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confimPassword: "",
      errors: {}
    };
  }
  validateForm = () => {
    const { password, confimPassword, email, username } = this.state;

    const errors = {};

    if (!email) {
      errors.email = "Required";
    }
    if (!username) {
      errors.username = "Required";
    }

    if (password !== confimPassword) {
      errors.confimPassword = "Passwords don't match";
    }

    if (
      !password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm
      )
    ) {
      errors.password =
        "Password must contain 8 characters, digits && special characters";
    }

    if (!emailRegex.test(email)) {
      errors.email = "Please insert a valid email address";
    }

    this.setState({ errors });
    return errors;
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.id]: event.target.value
      }
      // this.validateForm
    );
  };

  handleSubmit = async event => {
    const { password, confimPassword, email, username } = this.state;
    event.preventDefault();
    const errors = await this.validateForm();
    if (!Object.keys(errors).length) {
      this.setState({ errors: {} });
      const { username, email, password, confimPassword } = this.state;
      await createApiRequest({
        method: "post",
        url: "/signup",
        data: {
          username,
          email,
          password,
          confimPassword
        },
        //Admin123.
        // user: lori@yahoo.com Admin123.
        // message: "User is already in databse")
        errorHandler: ({
          response: {
            data: { message }
          }
        }) => {
          this.setState({ errors: { ...errors, message } });
        },

        afterSuccess: ({ data: { token } }) => {
          localStorage.setItem("token", token);
          this.props.history.push("/login");
        }
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <a href="/">
          {" "}
          <img
            src={require("../../assets/img/frame.png")}
            alt="Logo"
            className="frame"
          />
        </a>
        <div className="container-register">
          <hr className="new5" />
          <div className="title">
            <h2 className="text-center registerHeader">
              Let's create your account
            </h2>
          </div>
          <div className="register">
            <form id="form">
              <FormGroup controlId="username" id="inputs">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="text"
                  placeholder="Full name"
                  value={this.state.username}
                  onChange={this.handleChange}
                  isInvalid={errors.username}
                />
                {errors.username && (
                  <div className="error-message">{errors.username}</div>
                )}
              </FormGroup>

              <FormGroup controlId="email">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="email"
                  placeholder="Email address"
                  value={this.state.email}
                  isInvalid={errors.email}
                  onChange={this.handleChange}
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </FormGroup>
              <FormGroup controlId="password">
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  isInvalid={errors.password}
                  placeholder="Password"
                />
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </FormGroup>
              <FormGroup controlId="confimPassword">
                <FormControl
                  value={this.state.confimPassword}
                  onChange={this.handleChange}
                  type="password"
                  isInvalid={errors.confimPassword}
                  placeholder="Confirm Password"
                />
                {errors.confimPassword && (
                  <div className="error-message">{errors.confimPassword}</div>
                )}
              </FormGroup>
              {errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
              <Button
                block
                type="submit"
                style={{
                  background: "#F5044C",
                  marginTop: "90px",
                  marginBottom: "10px"
                }}
                onClick={this.handleSubmit}
              >
                Register
              </Button>
              <p className="already-account">
                Already have an account?{" "}
                <Link to="/login" className="link-reg">
                  Log in!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
