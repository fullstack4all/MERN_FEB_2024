import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './modules/header.js'

import './components.css'

import MainSection from './Pages/section1/mianSection.js'

import Counter from './count.js'
import User from './Users/newUser.js'

import NewPlace from './Pages/section1/newPlace.js'

import UserPlaces from './Pages/section1/section2/Pages/Newplaces.js'
function App() {
  return (
    <Router>

      <Header />

      <Switch>

        <Route path='/' exact >
          <MainSection />
          <Counter />
          <User />
        </Route>

        <Route path='/newPlace' exact  >
          <NewPlace />
        </Route>
        <Route path='/:uid/UserPlaceItems' exact >
          <UserPlaces />
        </Route>
      </Switch>

    </Router>


  );
}

export default App;
