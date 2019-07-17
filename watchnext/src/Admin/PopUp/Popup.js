import React from 'react';
import './popup.css';
import { withRouter } from "react-router-dom";


class Popup extends React.Component {
    constructor() {
      super()   
    }
    
    render() {
      return (
        <div id = "blurAdminPage">
          
          <div id = "mainDialogAddMovie"> 
            <h1 id = "AddMovie"> Add movie </h1>

            <div id = "dialogContent">
              <form>
                <div id = "titleURL">
                <label> Movie title </label>
                <label> Trailer URL </label> 
                </div>
                <div>
                  <input type = "text" id = " "/>
                  <input type = "text" id = " "/>
                </div>
                <label id = ""> Original source </label>
                <input type = "text" id = " "/>

                <br/>

                <label id = ""> Cover URL </label>
                <input type = "text" id = " "/>

                <br/>

                <label id = ""> Description </label>
                <input type = "text" id = ""/>
              </form>


            </div>


          </div>


        </div>
      )    
    }
}

export default withRouter(Popup);
