import React, { Component } from "react";
import "./settings.css";
// import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
// import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

class UserSettings extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row profileImage">
          <img
            src={require("../../assets/profile.png")}
            className="rounded-circle"
            alt="userAvatar"
          />
        </div>

        <div className="col-md-12">
          <div className="profileEdit row">
            <TextField
              label="First Name"
              id="mui-theme-provider-standard-input"
              defaultValue="Catalin"
              className="profileSettings"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="profileEdit row">
            <TextField
              label="Last Name"
              id="mui-theme-provider-standard-input"
              defaultValue="Lupascu"
              className="profileSettings"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="profileEdit row">
            <TextField
              label="Email Address"
              id="mui-theme-provider-standard-input"
              defaultValue="clupascu97@gmail.com"
              className="profileSettings"
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="profileEdit row mt-5">
            <Button variant="contained" color="primary" className="submitEdit">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSettings;
