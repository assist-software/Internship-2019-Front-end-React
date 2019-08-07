import React, { Component } from "react";
import "./navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUserCircle,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
        <div className="container">
          <a className="navbar-brand" href="/dashboard">
            <Logo />
            <span className="navTitle">MTB ASSIST</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-555"
          >
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item menuBar mr-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item menuBar mr-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={"/by-date"}
                >
                  By Date
                </NavLink>
              </li>
              <li className="nav-item menuBar mr-5">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={"/last-events"}
                >
                  Last Events
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={require("../../assets/profile.png")}
                    className="rounded-circle z-depth-0 mr-2"
                    alt="avatar"
                    height="36"
                  />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/my-events">
                    <span className="dropdown-icon">
                      <FontAwesomeIcon icon={faBookmark} color="#2f1b3c" />
                    </span>{" "}
                    My events
                  </a>

                  <a className="dropdown-item" href="/my-profile">
                    <span className="dropdown-icon">
                      <FontAwesomeIcon icon={faUserCircle} color="#2f1b3c" />
                    </span>{" "}
                    My profile
                  </a>

                  <a className="dropdown-item" href="/settings">
                    <span className="dropdown-icon">
                      <FontAwesomeIcon icon={faCog} color="#2f1b3c" />
                    </span>{" "}
                    Settings
                  </a>
                  <div className="dropdown-divider" />

                  <a
                    className="dropdown-item"
                    href="/login"
                    // onClick={this.handleLogout}
                  >
                    <span className="dropdown-icon">
                      <FontAwesomeIcon icon={faSignOutAlt} color="#2f1b3c" />
                    </span>{" "}
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
