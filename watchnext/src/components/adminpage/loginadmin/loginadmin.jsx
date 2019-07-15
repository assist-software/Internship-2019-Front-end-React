import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './loginadmin.css';
import './frame.png';
import {Link} from 'react-router-dom';
class LoginAdmin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          showPassword: false
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
          
          <div className="container" style={{marginTop:"160px", marginBottom:"150px"}}>
             <img src={require("../loginadmin/frame.png")}  alt="Logo"></img>
             <div className="container-login" style={{marginTop:"50px"}}>
             <hr className="new5" />
             <div className="title" style={{color:"#FFFFFF"}}>
             <h2 className="text-center logInHeader">Log in to <br /> your account</h2>
          </div>
          <div className="Login">
            <form id="form">
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
                  type={this.state.showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <span className="fa fa-fw fa-eye field-icon toggle-password"  onClick={() => this.setState({showPassword:!this.state.showPassword})}></span>
          
              </FormGroup>
              <Link to="/reset" className="link-reg" id="forgot" style={{textAlign:"right", display:"flex", float:"right"}}>Forgot password?</Link>
              <Button
                large="true"
                block
                disabled={!this.validateForm()}
                type="submit"
                style={{background:"#F5044C", marginTop:"110px", marginBottom:"25px"}}
              >
                Login
              </Button>
        
            </form>
          </div>
          </div>
          </div>
        
        );
      }
    }
    export default LoginAdmin;