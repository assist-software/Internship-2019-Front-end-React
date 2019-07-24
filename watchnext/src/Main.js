import React from 'react'
import Home from "./Home/Home"
import Categories from "./Categories/Categories"
import Watchlist from './Watchlist/Watchlist'
import Contact from './Contact/Contact'
import Login from './Login/Login';
import Register from './Register/Register';
import Movie from './Movie/Movie';
import Admin from './Admin/Admin';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Main = (props) => (
    <main>
      <Switch>
        <Route
          exact path='/'
          render={() => <Home updateCounter={()=>props.updateCounter()} />}
        />

        <Route
          path='/home'
          render={() => <Home updateCounter={()=>props.updateCounter()} />}
        />

        <Route
          path='/watchlist'
          render={() => <Watchlist updateCounter={()=>props.updateCounter()} />}
        />

        <Route
        path='/categories'
        render={() => <Categories updateCounter={()=>props.updateCounter()} />}
      />

        <Route path='/contact' component = {Contact} />
        <Route path='/login' component = {Login} />
        <Route path='/register' component = {Login} />
        <Route path='/reset' component = {Login} />
        <Route path='/movie' component = {Movie} />
        <Route path='/admin' component = {Admin} />
        <Route component={Home} />
      </Switch>
    </main>
  )

export default Main