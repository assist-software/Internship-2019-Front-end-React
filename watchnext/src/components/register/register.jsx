import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'

import { API_URL } from '../../constants/api'
import "./register.css";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      const { password, confirmPassword } = this.state;
      event.preventDefault();
     
      if (password !== confirmPassword) {
        this.setState({ registerError: 'Passwords don\'t match' })
      } else  if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm)){
        this.setState({ registerError: 'Password must contain ....' })
      } else {
    try {
      const { email } = this.state;
      const url = `${API_URL}/users?email=${email}`;
      const user = await axios.get(url)
      if(user.data[0]){
        this.setState({ registerError: 'User already exist' })
        throw new Error('User already exist')
      } else {
        const { email, password, name } = this.state; 
        const {data} = axios.post(`${API_URL}/users`, {email, password,name})
        this.props.history.push('/')
        console.log('Data',data);
        
      }
      
    } catch (err){
      console.log(err)
    }
    } };

  render() {
    const { registerError }  = this.state;
    return (
      <div className="container" >
        <img
          src={require("../../assets/img/frame.png")}
          alt="Logo"
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
              <FormGroup controlId="name" id="inputs">
                <FormControl
                  className="form-control"
                  autoFocus
                  type="text"
                  placeholder="Full name"
                  value={this.state.name}
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
              <FormGroup controlId="confirmPassword">
                <FormControl
                  value={this.state.confirmPassword}
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
