import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from "./Home/index"
import Categories from "./Categories/Categories"
import Watchlist from './Watchlist/Watchlist'
import Contact from './Contact/Contact'
import Login from './Login/Login';
import Register from './Register/Register';
import Movie from './Movie/Movie';
import Admin from './Admin/Admin';

function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component = {Home} />
              <Route path='/home' component = {Home} />
              <Route path='/categories' component = {Categories} />
              <Route path='/watchlist' component = {Watchlist} />
              <Route path='/contact' component = {Contact} />
              <Route path='/login' component = {Login} />
              <Route path='/register' component = {Register} />
              <Route path='/movie' component = {Movie} />
              <Route path='/admin' component = {Admin} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
