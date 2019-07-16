import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header/Header';
import Main from './Main';
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: props.location.pathname
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log("Route change!", this.props.location.pathname);
      this.setState(()=>{
        return {
          page:this.props.location.pathname
        }
      })
    }
  }

  render() {
    return(
      <div>
        <Header page={this.state.page}/>
        <Main />
      </div>
    );
  } 
}

export default withRouter(props => <App {...props} />);
