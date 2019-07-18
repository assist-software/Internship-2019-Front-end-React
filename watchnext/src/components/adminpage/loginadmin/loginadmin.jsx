import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './loginadmin.css';

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
          <div className="container">
             <div className="container-login-admin">
               <div className="col-md-12">
                 <img src={require("../../../assets/img/frame.png")}  alt="Logo"></img>
              <hr className="new5 mt-4" />
               </div>
               <div className="col-md-12">
                 <div className="title-admin">
             <h2 className="text-center logInHeader">Log in to <br /> your account</h2>
          </div>
               </div>
            <div className="col-md-12">
             
          <div className="Login">
            <form id="form">
             
                <div className="loginEmailRow">
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
                </div>
            
                  <FormGroup controlId="password">
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type={this.state.showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <span className="fa fa-fw fa-eye field-icon toggle-password" onClick={() => this.setState({showPassword:!this.state.showPassword})}></span>
              </FormGroup>
           
         

         
              
                  <Link to="/reset" className="link-reg" id="forgot" >Forgot password?</Link>
               

             
                   <Button
                large="true"
                block
                disabled={!this.validateForm()}
                type="submit"
              >
                Login
              </Button>
        
            

             
              
             
            
              
              
             
            </form>    </div>
          </div>
          </div>
          </div>
          
        
        );
      }
    }
    export default LoginAdmin;