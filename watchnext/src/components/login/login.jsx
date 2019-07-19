import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import createApiRequest from '../../api'
import logo from '../../assets/img/frame.png'
import "./login.css";
import { withRouter } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showPassword: false,
      errors: [],
      token:"",
      loginError:""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handeleFormData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmitForm = async e => {
      e.preventDefault();
      
      const { email, password } = this.state;
      await createApiRequest({
        method: 'post',
        url: '/signin',
        data: {
          email,
          password
        },
       
        errorHandler: (err) => {
          this.setState({ loginError: "Invalid credentials" })
        },
        afterSuccess: ({ data: {token, role } }) => {
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          const rol = localStorage.getItem('role');
           if (rol === "2"){
              this.props.history.push("/");
          } else {
              this.props.history.push("/admin");
           }
        }
      })
  };
  render() {
    const { loginError } = this.state;
    console.log(loginError);

    return (
      <div className="container">
        <img src={logo} className="frame" alt="Logo" />
        <div className="container-login">
          <hr className="new5" />
          <div className="title">
            <h2 className="text-center logInHeader">
              Log in to <br /> your account
            </h2>
          </div>

          <div className="Login">
            <div className="d-flex align-items-center justify-content-center w-100" id="err">
              {loginError}
            </div>
            <form id="form" onSubmit={this.onSubmitForm}>
              <FormGroup controlId="email">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="email"
                  name="email"
                  placeholder="Email address"
                   //value={this.state.email}
                  onChange={this.handeleFormData}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormControl
                  name="password"
                  //value={this.state.password}
                  onChange={this.handeleFormData}
                  type={this.state.showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <span
                  className="fa fa-fw fa-eye field-icon toggle-password"
                  onClick={() =>
                    this.setState({ showPassword: !this.state.showPassword })
                  }
                />
              </FormGroup>
              <Link
                to="/reset"
                className="link-reg"
                id="forgot"
                style={{ textAlign: "right", display: "flex", float: "right" }}
              >
                Forgot password?
              </Link>
              <Button
                large="true"
                block
                // disabled={!this.validateForm()}
                type="submit"
                style={{
                  background: "#F5044C",
                  marginTop: "110px",
                  marginBottom: "25px"
                }}
              >
                Login
              </Button>
              <p className="forgot">
                Don't have an account?{" "}
                <Link to="/register" className="link-reg">
                  {" "}
                  Let's create one!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);

