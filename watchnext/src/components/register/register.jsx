import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import createApiRequest from '../../api'
import "./register.css";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confimPassword: "",
      errors: []
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;

  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

  };
  handleSubmit = async (event) => {
      const { password, confimPassword, email } = this.state;
      event.preventDefault();
     
      if (password !== confimPassword) {
        this.setState({ registerError: 'Passwords don\'t match' })
      } else  if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm)){
        this.setState({ registerError: 'Password must contain ....' })
      // } else if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      // this.setState({ registerError: 'Please insert a valid email address' })
      } else {
    try {

      const { username, email, password, confimPassword } = this.state;
      await createApiRequest({
        method: 'post',
        url: '/signup',
        data: {
          username,
          email,
          password,
          confimPassword
        },
        //Admin123.
        // user: lori@yahoo.com Admin123.
        errorHandler: (err) => {
          this.setState({ loginError: "Invalid credentials" })
        },
        afterSuccess: ({ data: {token} }) => {
          localStorage.setItem('token', token);
          this.props.history.push("/login");
        }
      })  
    } catch (err){
      console.log(err, "eroare")
  }
    } 
  };

  render() {
    const { registerError }  = this.state;
    return (
      <div className="container" >
        <img
          src={require("../../assets/img/frame.png")}
          alt="Logo"
          className="frame"
        />
        <div className="container-register">
          <hr className="new5" />
          <div className="title">
            <h2 className="text-center registerHeader">
              Let's create your account
            </h2>
          </div>
          <div className="Login">
            <form id="form">
              <FormGroup controlId="username" id="inputs">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="text"
                  placeholder="Full name"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
             
              <FormGroup controlId="email">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="email"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleChange}
        
                />
              </FormGroup>
              <FormGroup controlId="password">
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup controlId="confimPassword">
                <FormControl
                  value={this.state.confimPassword}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <div className="error-message">{registerError}</div>
              <Button
                block
                disabled={!this.validateForm()}
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
              <p className="already-account" >
                Already have an account?{" "}
                <Link
                  to="/"
                  className="link-reg"
                >
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

