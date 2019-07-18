import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../../constants/api";
import "./login.css";

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
    try {
      e.preventDefault();
      // console.log(this.state);
      const { email, password } = this.state;

      // const url = `${API_URL}/users?email=${email}`;
      const url = `${API_URL}signin`
     await axios.post(url,{
        email:email,
        password: password
        //Admin123.
      }).then((response) => {
        //header
        console.log(response)
        if(response.data.status === "Login successfully"){
          console.log('test');
            const token = response.data.token;

            localStorage.setItem("token", token)
            response.headers.Authorization = `Bearer ${token}`;
           // localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                token})
                console.log('test')

            this.props.history.push("/");
            } else {
            console.log("error")
            this.setState({ loginError: "Invalid credentials" });
            throw new Error("Invalid credentials");
            }
        }).catch ((err) =>{
          console.log("Error ", err);
        }) 
        
      //console.log("User", user);
      // if (user.data[0] && user.data[0].password === password) {
      //   //redirect here
      //   this.props.history.push("/");
      //   // return user.data[0]
      // } else {
      //   this.setState({ loginError: "Invalid credentials" });
      //   throw new Error("Invalid credentials");
      // }
     } catch (err) {
       console.log("Error ", err);
     }
    // .then(response => {
    //   const validUser  = response.data.find((user)=> {
    //    if(this.state.email === user.email && this.state.password === user.password)
    //     {
    //       return true
    //     }
    //  })
    //  if(validUser) {
    //     return < Redirect to='/'/>

    //  }
    // })
    // .catch(err => console.log(err));
  };
  render() {
    const { loginError } = this.state;
    console.log(loginError);

    return (
      <div className="container">
        <img src={require("../../assets/img/frame.png")} className="frame" alt="Logo" />
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
export default Login;

