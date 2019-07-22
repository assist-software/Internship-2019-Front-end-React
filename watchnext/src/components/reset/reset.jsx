import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./reset.css";

import createApiRequest from "../../api";

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      success: true,
      message: ""
    };
  }
  validateForm() {
    return this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();

    const { email } = this.state;
    await createApiRequest({
      method: "post",
      url: "/reset-password",
      data: {
        email
      }
    })
      .then(response => {
        console.log(response);
        alert("An email with your reseted password has been sent!");
        // this.setState({ success: true });
        // console.log("test", success);

        // if (response.data.success === false) {
        //   // this.setState({
        //   //   success: false,
        //   //   message: response.data.message
        //   // });
        //   console.log("success  false");
        // }
      })
      .catch(error => {
        alert("This user is not in database");
      });
  };

  render() {
    const { message } = this.state;
    console.log(message);
    return (
      <div className="container">
        <img
          src={require("../../assets/img/frame.png")}
          alt="Logo"
          className="frame"
        />

        <div className="container-reset">
          <hr className="new5" />
          <div className="title-reset">
            <h2>Reset password</h2>
            <p>
              We will send you over the email the instructions in order to get
              your password reseted.
            </p>
          </div>
          <div className="reset">
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
                onClick={this.handleSubmit}
              >
                Reset password
              </Button>
              <div
                className="d-flex align-items-center justify-content-center w-100"
                id="err"
              >
                {message}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
