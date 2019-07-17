import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './reset.css';


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
          <div className="container">
          <img src={require("../../assets/img/frame.png")} alt="Logo"></img>
         
          <div className="container-reset">
          <hr className="new5" />
          <div className="title-reset">
            <h2>Reset password</h2>
            <p>We will send you over the email the instructions in order to get your password reseted.</p>
            </div>
          <div className="Login">
            <form id="form">
              <FormGroup controlId="email">
                <FormControl
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>

              <Button
                block
                disabled={!this.validateForm()}
                type="submit"
                
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
