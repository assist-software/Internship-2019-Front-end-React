import React from 'react';
import '../Login/login.css';
import '../Home/Home'

import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'  
import validator from 'validator';

class Login extends React.Component {

    state = {
        isPassworDisplayed: false,
        isLogin: true,
        isRegister: false,
        isReset: false,
        isClicked: false,
        checked: false,
        changeColor: false
    }

    constructor() {
        super()
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    displayPassword(value) {
        this.setState({isPassworDisplayed: value})
    }

    resetClicked(changeColor) { 
        if(this.state.checked == true)
            this.setState({isClicked: true})
        else
            this.setState({changeColor: true})
        console.log(this.state.changeColor)
    }

    validateEmail(value, changeColor) {   
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.state = {checked: re.test(value)}
        this.resetClicked(this.state.changeColor)
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
        const {checked} = false
        const {changeColor} = false

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
                            <p id = "password"> Forgot password? </p>
                        <div align = "center" id = "buttonDiv">
                            <input type = "button" className = "logIn button1" align = "center" value = "Log in" align ="center"></input>
                            <p id="create"> Don’t have an account? Let’s create one </p>
                            <i id = "createOne"></i>
                        </div>
                    </div>
                    }

                    {(isRegister) && 
                        <div id = "box">
                            <h1 id = "loginText"> Log in to <br/>your account </h1>
                            <div align="center">
                                <input type="text" id="log" name="fullName" placeholder="Full name"/>
                                <input type="text" id="log" name="email" placeholder="Email adress"/>
                                <input type={isPassworDisplayed ? "text":"password"} name="password" placeholder = "Password" id = "log" className = "vis"></input>
                                <FontAwesomeIcon icon={faEye} id = "eye" onClick={()=> this.displayPassword(!isPassworDisplayed)} />
                            </div>
                                <p id = "password"> Forgot password? </p>
                            <div align = "center" id = "buttonDiv">
                                <input type = "button" className = "logIn button1" align = "center" value = "Register" align ="center"></input>
                                <p id="create"> Already have an account? Log in </p>
                                <i id = "haveOne"></i>
                            </div>
                        </div>
                    }

                    {(isReset) && 
                        <div id = "boxReset">
                            <h1 id = "resetLoginText"> Reset password </h1>
                            <p id = {isClicked ? "hideItem" : "resetText" } > We will send you over email the instructions in <br/> order to get your password reseted. </p>
                            <div align="center">
                                <input type="text" id = {isClicked ? "hideItem" : "log"} className = {changeColor ? "logFail" : "log"} name="email" placeholder="Email adress"  value={this.state.value} onChange={this.handleChange} />
                                <p id = {isClicked ? "afterClick" : "hideItem" } > An email with instructions <br/> has been sent to <font color = "#F5044C">{this.state.value}</font>! </p>
                            </div>
                            <div align = "center" id = "buttonDiv">
                                <input type = "button" id = {isClicked ? "hideItem" : "" } className = "logIn button1" value = "Reset password" align ="center" onClick = {() => this.validateEmail(this.state.value, this.state.changeColor)}></input>
                                <input type = "button" id = {isClicked ? "button2" : "hideItem" } align = "center" value = "Return Home"></input> 
                            </div>
                        </div>
                    }
                </div>
        )    
    }
}

const input = document.querySelector("click")

export default withRouter(Login)