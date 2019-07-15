import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './register.css';
import './frame.png';
import {Link} from 'react-router-dom';
class Register extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
     name:"",
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
     <div className="container" style={{width:"560px", height:"711px", marginTop:"150px", marginBottom:"150px"}}>
     <img src={require("../login/frame.png")} style={{marginTop:"4%", marginBottom:"2%"}} alt="Logo"></img>
     <div className="container-login" style={{marginTop:"50px"}} >
     <hr className="new5" />
     <div className="title" style={{color:"#FFFFFF"}}>
      <h2 className="text-center">Let's create your account</h2>
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
       <Button
        block
        disabled={!this.validateForm()}
        type="submit"
        style={{background:"#F5044C", marginTop:"90px", marginBottom:"10px"}}
       >
        Register
       </Button>
       <p className="forgot" style={{color:"#9C9B9B"}}>Already have an account?  <Link to="/" className="link-reg" style={{textDecoration:"underline", marginLeft:"5px"}}>Log in!</Link></p>
       
      </form>
     </div>
     </div>
     </div>
    );
   }
  }
  export default Register;