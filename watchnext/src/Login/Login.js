import React from 'react';
import '../Login/login.css';
import '../Home/Home'

import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'  
import {Link} from 'react-router-dom';

class Login extends React.Component {
    
    constructor() {
        super()
        this.state = {
            value: '',
            password1: '',
            password2: '',
            isPassworDisplayed: false,
            isLogin: true,
            isRegister: false,
            isReset: false,
            isClicked: false,
            checked: false,
            isPressed: false,
            squad: false
        
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword1 = this.handleChangePassword1.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChangePassword1(event) {
        this.setState({password1: event}, () => {
            console.log(this.state.password1)
        });
        
    }

    handleChangePassword2(event) {
        this.setState({password2: event});
        console.log(this.state.password1)
    }

    displayPassword(value) {
        this.setState({isPassworDisplayed: value})
    }

    matchingPasswords(){
        if(this.state.password1 === this.state.password2){
            console.log(this.state.password1, this.state.password2)
            console.log("equal")
            return 1;
        }
        else {
            console.log("not equal")
            return 0;
        }
    }

    resetClicked() { 
        if(this.state.checked == true)
            this.setState({isClicked: true})
        this.setState({squad: true})
    }

    changeToRegister(isLogin, isRegister) {
        this.setState({isLogin: false, isRegister: true})
        this.setState({
            isPressed: false,
            isClicked: false,
            checked: false
        })
    }

    changeToLogin(isRegister, isLogin){
        this.setState({isRegister: false, isLogin: true})
        this.setState({
            isPressed: false,
            isClicked: false,
            checked: false
        })
    }

    changeToReset(isLogin, isReset){
        this.setState({isLogin: false, isReset: true})
        this.setState({
            isPressed: false,
            isClicked: false,
            checked: false
        })
    }

    validateEmail(value, isPressed) {   
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.state = {checked: re.test(value)}
        this.resetClicked()
        this.setState({isPressed: true})
    }

    componentDidMount(){
        if(this.props.location.pathname.indexOf('login') !== -1) {
            this.setState({isLogin: true, isRegister: false, isReset: false})
        }
        else if(this.props.location.pathname.indexOf('register') != -1){
            this.setState({isLogin: false, isRegister: true, isReset: false})
        }
        else{
            this.setState({isLogin: false, isRegister: false, isReset: true})
        }

    }

    render() {
        const {isPassworDisplayed, isLogin, isRegister, isReset} = this.state
        const {isClicked} = this.state
        return (
            <div id = "login_page">

                    <div id = "logo"> 
                        <img id = "logoImage" src={require("../Footer/moovie_logo.png")}/> 
                    </div>

                    <div id = "barLogin"></div>

                    {(isLogin) && 
                    <div id = "box">
                        <h1 id = "loginText"> Log in to <br/>your account </h1>
                        <div align="center">
                            <input type="text" id="log" name="email" placeholder="Email adress"/>
                            <input type={isPassworDisplayed ? "text":"password"} name="password" placeholder = "Password" id = "log" className = "vis"></input>
                            <FontAwesomeIcon icon={faEye} id = "eye" onClick={()=> this.displayPassword(!isPassworDisplayed)} />
                        </div>
                            <Link to="/reset"> <p id = "password" onClick = {() => this.changeToReset(isLogin, isReset)}> Forgot password? </p> </Link>
                            {(this.state.squad && this.state.isPressed && !isClicked && isLogin) && <p id='noLogin' align = "center">Invalid email or blank fields. <br/> Try again!</p>}
                        <div align = "center" id = "buttonDiv">
                            <input type = "button" className = "logIn button1" align = "center" value = "Log in" align ="center" onClick = {() => this.validateEmail(this.state.value, this.state.isPressed)}></input>
                            <Link to="/register"> <p id="create" onClick = {() => this.changeToRegister(isLogin, isRegister)}> Don’t have an account? Let’s create one </p> </Link>
                            <i id = "createOne"></i>
                        </div>
                    </div>
                    }

                    {(isRegister) && 
                        <div id = "box">
                            <h1 id = "loginText"> Let<font face = "corbel">'</font>s create <br/>your account </h1>
                            <div align="center" id = "logInInputDiv">
                                <input type="text" id="log" name="fullName" placeholder="Full name"/>
                                <input type="text" id = {isClicked ? "hideItem" : "log"} name="email" placeholder="Confirm email adress"  value={this.state.value} onChange={this.handleChange} />
                                

                                <input type={isPassworDisplayed ? "text":"password"} name="password" placeholder = "Password" id = "log" className = "vis" value={this.state.password1} onChange={e=>this.handleChangePassword1(e.target.value)}></input>
                                <FontAwesomeIcon icon={faEye} id = "eye" onClick={() => this.displayPassword(!isPassworDisplayed)} />
                                <br/>
                                <input type={isPassworDisplayed ? "text":"password"} name="password" placeholder = "Confirm password" id = "log" className = "vis" value={this.state.password2} onChange={e=>this.handleChangePassword2(e.target.value)}></input>

                                {(this.state.squad && this.state.isPressed && !isClicked && isRegister) && <p id='noRegister'>Invalid email or blank fields. <br/> Try again!</p>}
                                {/* {console.log(this.state.password1, this.state.password2)} */}
                                {(this.matchingPasswords(this.state.password1, this.state.password2) == 0) && <p id="noRegister"> Passwords don't match </p>}
                            </div>
                            <div align = "center" id = "buttonDiv">
                                <input type = "button" className = "logIn button1" align = "center" value = "Register" align ="center"  onClick = {() => this.validateEmail(this.state.value, this.state.isPressed)} ></input>
                                <Link to="/login"> <p id="create" onClick = {() => this.changeToLogin(isRegister, isLogin)}> Already have an account? Log in </p> </Link>
                                <i id = "haveOne"></i>
                            </div>
                        </div>
                    }

                    {(isReset) && 
                        <div id = "boxReset">
                            <h1 id = "resetLoginText"> Reset password </h1>
                            <p id = {isClicked ? "hideItem" : "resetText" } > We will send you over email the instructions in <br/> order to get your password reseted. </p>
                            <div align="center">
                                <input type="text" id = {isClicked ? "hideItem" : "log"} name="email" placeholder="Email adress"  value={this.state.value} onChange={this.handleChange} />
                                <p id = {isClicked ? "afterClick" : "hideItem" } > An email with instructions <br/> has been sent to <font color = "#F5044C">{this.state.value}</font>! </p>
                                {(this.state.squad && this.state.isPressed && !isClicked && isReset) && <p id='noEmail'>Invalid email or blank fields <br/> Try again!</p>}
                            </div>
                            <div align = "center" id = "buttonDiv">
                                <input type = "button" id = {isClicked ? "hideItem" : "" } className = "logIn button1" value = "Reset password" align ="center" onClick = {() => this.validateEmail(this.state.value, this.state.isPressed)}></input>
                                <Link to="/home"><input type = "button" id = {isClicked ? "button2" : "hideItem" } align = "center" value = "Return Home"></input> </Link>
                            </div>
                        </div>
                    }
                </div>
        )    
    }
}

const input = document.querySelector("click")

export default withRouter(Login)