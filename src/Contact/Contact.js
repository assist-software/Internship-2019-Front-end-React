import React from 'react';
import '../Contact/contact.css';
import { withRouter } from "react-router-dom";
import Header from '../Header/Header';

class Contact extends React.Component {
    constructor() {
      super()   
    }
    
    render() {
      return (
        <div className="contacts">
          <div id = "barContact"></div>
          <p id="cont">Contact</p>
            <form id="formcontact" action="/action_page.php">
                <label id="first">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                <label id="last">Last name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label id="em">Email</label>
                <input type="email" id="email" name="email" placeholder="Email.." />
                <label id="sub">Subject</label>
                <input id="subject" name="subject" placeholder="Write something.."></input>
                <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
      )    
    }
}
export default withRouter(Contact);
