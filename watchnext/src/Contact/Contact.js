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
        <div>
          <b>Contact - Page</b>
        </div>
      )    
    }
}
//  {1==1 && this.props.history.push("/")}
export default withRouter(Contact);
