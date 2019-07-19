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
        <div className="App">
          <p id="cont">Contact</p>
            <form id="form" action="/action_page.php">
                <label id="firt">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                <label id="last">Last name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label id="em">Email</label>
                <input type="email" id="email" name="email" placeholder="Email.." />
                <label id="sub">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
      )    
    }
}
export default withRouter(Contact);
