import React from 'react';
import '../Login/login.css';
import '../Home/Home'
import api from "../api-connection.js"

import { withRouter, Redirect } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router'

class Login extends React.Component {

	constructor() {
		super()
		this.state = {
			isLogin: true,
			isRegister: false,
			isReset: false,
			isPasswordDisplayed: false,
			emailLogin: '',
			password: '',
			requestLogin: false,
			fullName: '',
			passwordConfirm: '',
			requestRegister: false,
			requestReset: false,
			lerrors: 0,
			// secret_token: JSON.parse(localStorage.getItem("token")),
			// rolUser: JSON.parse(localStorage.getItem("Rol"))
		}
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this);

		this.handleChangeEmailLogin = this.handleChangeEmailLogin.bind(this);
		this.handleChangeFullName = this.handleChangeFullName.bind(this);

	}

	componentDidMount() {
		if (this.props.location.pathname.indexOf('login') !== -1) {
			this.setState({ isLogin: true, isRegister: false, isReset: false })
		}
		else if (this.props.location.pathname.indexOf('register') != -1) {
			this.setState({ isLogin: false, isRegister: true, isReset: false })
		}
		else {
			this.setState({ isLogin: false, isRegister: false, isReset: true })
		}

	}

	handleChangeFullName(fullName) {
		this.setState({ fullName: fullName })
	}

	changeToRegister() {
		this.setState({ isLogin: false, isRegister: true })
	}

	handleChangePassword(password) {
		this.setState({ password: password })
	}

	handleChangeEmailLogin(email) {
		this.setState({ emailLogin: email })
	}

	handleChangePasswordConfirm(password) {
		this.setState({ passwordConfirm: password })
	}

	displayPassword(password) {
		this.setState({ isPassworDisplayed: password })
	}

	changeToLogin() {
		this.setState({ isRegister: false, isLogin: true })
	}

	changetoReset() {
		this.setState({ isLogin: false, isReset: true })
	}

	isEmailValid(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email)
	}

	passwordsValidation(password, passwordConfirm) {
		if (password === passwordConfirm)
			return true;
		else
			return false;
	}

	errorsReset(emailLogin) {
		var errors = [];

		if (emailLogin == '') {
			errors.push('Empty fields! ');
		} else

			if (emailLogin != '' && this.isEmailValid(emailLogin) != 1) {
				errors.push("Invalid email! ");
			}
			else {
				this.sendResetToJsonServer(emailLogin, errors)
			}

		this.setState({ requestReset: true, lerrors: errors })


		return errors;
	}

	errorsRegister(fullName, emailLogin, password, passwordConfirm) {
		var errors = [];

		if (fullName == '' || emailLogin == '' || password == '' || passwordConfirm == '') {
			errors.push("Empty fields! ");
		} else

			if (this.isEmailValid(emailLogin) != 1 && emailLogin != '') {
				errors.push("Invalid email! ");
			} else

				if (this.passwordsValidation(password, passwordConfirm) == false) {
					errors.push("Passwords don’t match! ");
				}
				else {
					this.sendToJsonServer(fullName, emailLogin, password, passwordConfirm,errors)
				}

		this.setState({ requestRegister: true, lerrors: errors })
		return errors;
	}

	errors(emailLogin, password) {
		var errors = [];

		if (emailLogin == '' || password == '') {
			errors.push("Empty fields. ");
		} else
			if (this.isEmailValid(emailLogin) != 1) {
				errors.push("Invalid email.");
			} else {
				this.sendLoginToJsonServer(emailLogin, password, errors)
			}
		this.setState({ requestLogin: true, lerrors: errors })
		return errors;
	}

	sendLoginToJsonServer = (emailLogin, password, errors) => {
		var data = {
			"email": emailLogin,
			"password": password
		};

		fetch(api.logIn,
			{
				crossDomain: true,
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
			.then(response => response.json())
			.then(data => {
				localStorage.setItem('secret_token', data.token)
				localStorage.setItem('user_rol', data.Rol)
				if(localStorage.getItem('secret_token') != 'undefined'){
					this.props.history.push("/home")
				}
				errors.push(JSON.stringify(data.message))
				this.setState({ requestLogin: true, lerrors: errors })
				return errors
			}
			);

	}

	sendResetToJsonServer = (emailLogin, errors) => {
		var data = {
			"email": emailLogin
		};

		fetch(api.resetPass,
			{
				crossDomain: true,
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
				
			})
			.then(response => response.json())
			.then(data => {
				// alert(JSON.stringify(data.message))
				console.log(JSON.stringify(data.message).replace(/"/g, '') )
				if(JSON.stringify(data.message).replace(/"/g, '') == "Email provided was not found"){		
					errors.push(JSON.stringify(data.message).replace(/"/g, ''))
					console.log(errors)
				}
				this.setState({ requestReset: true, lerrors: errors })
				return errors
			})
			

	}

	sendToJsonServer = (fullName, emailLogin, password, passwordConfirm, errors) => {

		if (fullName != '' && this.isEmailValid(emailLogin) && this.passwordsValidation(password, passwordConfirm)) {
			var data = {
				"email": emailLogin,
				"password": password,
				"fullName": fullName,
				"confirmPassword": passwordConfirm
			};

			fetch(api.singUp,
				{
					crossDomain: true,
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
				.then(response => response.json()).then(data => {
				// .then(data => alert(JSON.stringify(data)));
				console.log(data.message)
				if(data.message != "Email aready taken"){
					// this.props.history.push("/login")
					this.changeToLogin()
				} 
				errors.push(JSON.stringify(data.message))
				this.setState({ requestRegister: true, lerrors: errors })
				return errors
				})

		} else { alert("invalid data 	") }
	}



	render() {
		const { isLogin, isRegister, isReset } = this.state
		const { requestLogin, requestRegister, lerrors, requestReset } = this.state
		const { isPassworDisplayed, emailLogin, password, fullName, passwordConfirm } = this.state

		if (localStorage.getItem('secret_token') != null && localStorage.getItem('secret_token') != 'undefined') {
			this.props.history.push("/home")
		}

		return (

			<div id="login_page">

				<div id="logo">
					<a href = "../home" ><img id="logoImage" src={require("../Footer/moovie_logo.png")} /> </a>
				</div>

				<div id="barLogin"></div>

				{(isLogin) &&
					<div id="box">
						<h1 id="loginText"> Log in to <br />your account </h1>
						<div align="center">
							<input type="text" id="log" name="email" placeholder="Email adress" value={emailLogin} onChange={e => this.handleChangeEmailLogin(e.target.value)} />
							<input name="password" placeholder="Password" id="log" className="vis" type={isPassworDisplayed ? "text" : "password"} value={password} onChange={e => this.handleChangePassword(e.target.value)} />
							<FontAwesomeIcon icon={faEye} id="eye" onClick={() => this.displayPassword(!isPassworDisplayed)} />
						</div>
						<Link to="/reset"> <p id="password" onClick={() => this.changetoReset()}> Forgot password? </p> </Link>

						{(requestLogin == true && this.state.lerrors.length > 0) && <p id='noLogin' align="center" >{this.state.lerrors.map((item) => 
							 <div>{item.replace(/"/g, '')}</div>
						)} </p>}
						<div align="center" id="buttonDiv">
							<input type="button" className="logIn button1" align="center" value="Log in" onClick={() => this.errors(emailLogin, password)} />

							<Link to="/register"> <p id="create" onClick={() => this.changeToRegister()}> Don’t have an account? Let’s create one </p> </Link>
							<i id="createOne"></i>

						</div>
					</div>
				}	

				{(isRegister) &&
					<div id="box">
						<h1 id="loginText"> Let<font face="corbel">'</font>s create <br />your account </h1>
						<div align="center" id="logInInputDiv">
							<input type="text" id="log" name="fullName" placeholder="Full name" value={fullName} onChange={e => this.handleChangeFullName(e.target.value)} />
							<input type="text" id="log" name="email" placeholder="Email adress" value={emailLogin} onChange={e => this.handleChangeEmailLogin(e.target.value)} />


							<input type={isPassworDisplayed ? "text" : "password"} name="password" placeholder="Password" id="log" className="vis" value={password} onChange={e => this.handleChangePassword(e.target.value)} />
							<FontAwesomeIcon icon={faEye} id="eye" onClick={() => this.displayPassword(!isPassworDisplayed)} />
							<br />
							<input type={isPassworDisplayed ? "text" : "password"} name="password" placeholder="Confirm password" id="log" className="vis" value={passwordConfirm} onChange={e => this.handleChangePasswordConfirm(e.target.value)} />			
							{(requestRegister == true && this.state.lerrors != '') && <p id='noLogin' align="center" >{this.state.lerrors.map((item) => 
							 <div>{item.replace(/"/g, '')}</div>
							)} </p>}

						</div>
						<div align="center" id="buttonDiv2">
							<input type="button" className="logIn button1" align="center" value="Register" onClick={() => this.errorsRegister(fullName, emailLogin, password, passwordConfirm)} />
							<Link to="/login"> <p id="create" onClick={() => this.changeToLogin()}> Already have an account? Log in </p> </Link>
							<i id="haveOne"></i>
						</div>
					</div>
				}

				{(isReset) &&
					<div id="boxReset">
						<h1 id="resetLoginText"> Reset password </h1>
						<p id={(requestReset == true && lerrors == '') ? "hideItem" : "resetText"} > We will send you over email the instructions in <br /> order to get your password reseted. </p>
						<div align="center">
							<input type="text" id={(requestReset == true && lerrors == '') ? "hideItem" : "log"} name="email" placeholder="Email adress" value={emailLogin} onChange={e => this.handleChangeEmailLogin(e.target.value)} />
							{(requestReset == true && lerrors == '') && <p id="resetText"> An email with instructions <br /> has been sent to <font color="#F5044C">{emailLogin}</font>! </p>}
							{console.log(requestReset, lerrors.length, lerrors)}
							{(requestReset == true) && <p id='noLogin' align="center" >{lerrors.map((item) => 
							 <div>{item.replace(/"/g, '')}</div>
							)} </p>}
						</div>
						<div align="center" id="buttonDiv3">
							<input type="button" id={(requestReset == true && lerrors == '') ? "hideItem" : ""} className="logIn button1" value="Reset password" align="center" onClick={() => this.errorsReset(emailLogin)} />
							{<Link to="/home"><input type="button" id={(requestReset == true && lerrors == '') ? "button2" : "hideItem"} align="center" value="Return Home"></input> </Link>}
						</div>
					</div>
				}
			</div>
		)
	}
}

const input = document.querySelector("click")

export default withRouter(Login)
