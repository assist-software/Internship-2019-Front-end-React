import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './login.css';
import './logo.png';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      handleSubmit = event => {
        event.preventDefault();
      }
      
      render() {
        return (
          <div className="container" style={{marginTop:"150px", marginBottom:"150px"}}>
          <img src={require("../login/logo.png")}  alt="Logo"></img>
          <hr className="new5" />
          <div className="container-login">
          <div className="title" style={{color:"#FFFFFF"}}>
            <h2 className="text-center">Log in <br /> to your account</h2>
            </div>
          <div className="Login">
            <form id="form">
              <FormGroup controlId="email" bsSize="large" id="inputs">
                <FormControl
                  div className="form-control"
                  autoFocus
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{backgroundColor:"transparent", color:"white"}}
               
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large" id="inputs">
              
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Password"
                  style={{backgroundColor:"transparent", color:"white"}}
                  
                />
              </FormGroup>
              <Link to="/reset" className="link-reg" id="forgot" style={{textAlign:"right", display:"flex", float:"right"}}>Forgot password?</Link>
              <Button
                btn large
                block
                disabled={!this.validateForm()}
                type="submit"
                style={{background:"#F5044C", marginTop:"90px", marginBottom:"10px"}}
              >
                Login
              </Button>
              <p className="forgot" style={{color:"#9C9B9B"}}>Don't have an account?   <Link to="/register" className="link-reg" style={{textDecoration:"underline"}}>Let's create one!</Link></p>>
             
            </form>
          </div>
          </div>
          </div>
        
        );
      }
    }

    export default Login;