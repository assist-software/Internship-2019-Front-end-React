import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './reset.css';
import './logo.png';
import {Link} from 'react-router-dom';

class Reset extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: ""

        };
      }
      validateForm() {
        return this.state.email.length > 0;
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
          <div className="container" style={{width:"560px", height:"463", marginTop:"150px", marginBottom:"150px"}}>
          <img src={require("../login/logo.png")} alt="Logo"></img>
          <hr className="new5" />
          <div className="container-reset" style={{marginTop:"50px"}}>
          <div className="title">
            <h2>Reset password</h2>
            </div>
            <p >We will send you over the email the instructions in order to get your password reseted.</p>
          <div className="Login">
            <form id="form">
              <FormGroup controlId="email" bsSize="large" id="inputs">
                <FormControl
                  div className="form-control"
                  type="email"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleChange}
                  style={{backgroundColor:"transparent", color:"white"}}
               
                />
              </FormGroup>
            
              <Button
                btn large
                block
                disabled={!this.validateForm()}
                type="submit"
                style={{background:"#F5044C", color:"#FFFFFF;"}}
              >
               Reset password
              </Button>
            </form>
          </div>
          </div>
          </div>
        );
      }
    }

    export default Reset;