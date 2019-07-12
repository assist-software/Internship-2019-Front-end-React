import React from 'react';
import '../Contact/contact.css';
import { withRouter } from "react-router-dom";

class Contact extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
          <div><b>Contact - Container</b>
            {1==1 && this.props.history.push("/Home")}
          </div>
        )    
    }
}

export default withRouter(Contact);
