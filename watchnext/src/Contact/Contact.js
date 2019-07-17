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
            <form action="/action_page.php">
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
                <label>Last name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Email.." />
                <label>Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
      )    
    }
}
export default withRouter(Contact);
