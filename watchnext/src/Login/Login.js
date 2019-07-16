import React from 'react';
import '../Login/login.css';

import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'  

class Login extends React.Component {

    state = {
        isPassworDisplayed: false,
        isLogin: true,
        isRegister: false
    }

    componentDidMount(){
        // verifici daca esti pe login, register
        // daca e login
        // set state isLogin: true
    }

    constructor() {
        super()
    }

    displayPassword(value) {
        this.setState({isPassworDisplayed: value})
    }

    componentDidMount(){
        if(this.props.location.pathname.indexOf('login') !== -1) {
            this.setState({isLogin: true, isRegister: false})
        }
        // else if() {}
        else {
            this.setState({isLogin: false, isRegister: true})
        }

    }

    render() {
        const {isPassworDisplayed, isLogin, isRegister} = this.state

        return (
            <div id = "login_page">

                    <div id = "logo"> 
                        <img id = "logoImage" src={require("../Footer/moovie_logo.png")}/> 
                    </div>

                    <div id = "barLogin"></div>

                    <div id = "box">
                        {(isLogin) && <h1 id = "loginText"> Log in to <br/>your account </h1>}
                        {(isRegister) && <h1 id = "loginText"> Let's create <br/>your account </h1>}
                        <div align="center">
                            {(isRegister) && <input type="text" id="log" name="fullName" placeholder="Full name"/>} 
                            {(isLogin || isRegister) && <input type="text" id="log" name="email" placeholder="Email adress"/>} 
                            {(isLogin || isRegister) && <input type={isPassworDisplayed ? "text":"password"} name="password" placeholder = "Password" id = "log" class = "vis"></input>}
                            <FontAwesomeIcon icon={faEye} id = "eye" onClick={()=> this.displayPassword(!isPassworDisplayed)} />
                        </div>
                            {(isLogin) && <p id = "password"> Forgot password? </p>}
                            <div align = "center" id = "buttonDiv">
                            {(isLogin) && <input type = "button" class = "logIn button1" align = "center" value = "Log in" align ="center"></input>}
                            {(isRegister) && <input type = "button" class = "logIn button1" align = "center" value = "Register" align ="center"></input>}
                            {(isLogin) && <p id="create"> Don’t have an account? Let’s create one </p>}
                            {(isLogin) && <i id = "createOne"></i>}
                        
                            {(isRegister) && <p id="create"> Already have an account? Log in </p>}
                            {(isRegister) && <i id = "haveOne"></i>}

                        </div>
                    </div>
 


            </div>
        )    
    }
}

const input = document.querySelector("click")

export default withRouter(Login)
