import React, { Component } from "react";
import "./login.css";
import { ReactComponent as Bike } from "../../assets/bike.svg";
import Button from "@material-ui/core/Button";
import SignIn from "../signin/signin";
import { Modal } from "react-bootstrap";
import SignUp from "../signup/signup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModIn: false,
      showModUp: false
    };
  }

  closeIn = () => {
    this.setState({ showModIn: false });
  };

  openIn = () => {
    this.setState({ showModIn: true });
  };

  closeUp = () => {
    this.setState({ showModUp: false });
  };

  openUp = () => {
    this.setState({ showModUp: true });
  };

  showSignIn = () => {
    this.setState({ showModUp: false, showModIn: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row headBike mt-5">
          <Bike />
        </div>
        <div className="row log">
          <Button
            variant="contained"
            color="primary"
            className="loginIn"
            onClick={this.openIn}
          >
            Sign In
          </Button>
          <Modal show={this.state.showModIn} onHide={this.closeIn}>
            <Modal.Header closeButton />
            <Modal.Body className="signInCont">
              <SignIn />
            </Modal.Body>
          </Modal>
        </div>
        <div className="row sUp mt-2">
          <Button
            variant="contained"
            color="primary"
            className="signUp"
            onClick={this.openUp}
          >
            Sign Up
          </Button>
          <Modal show={this.state.showModUp} onHide={this.closeUp}>
            <Modal.Header closeButton />
            <Modal.Body className="signUpCont">
              <SignUp showSignIn={this.showSignIn} />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Login;
