import React from 'react'
import './App.css'
import Header from './Header/Header';
import Main from './Main';
import { withRouter } from "react-router-dom";
import Footer from './Footer/Footer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: props.location.pathname,
      watchListCounter:localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')).length : 0
    }
  }

  watchListCounter = () => {
    this.setState(()=>{
        return{
          watchListCounter:localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')).length : 0
        }
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
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
        <Header page={this.state.page} wLCounter={this.state.watchListCounter}/>
        <Main updateCounter={this.watchListCounter} page={this.state.page}/>
        <Footer />
      </div>
    );
  } 
}

export default withRouter(props => <App {...props} />);
