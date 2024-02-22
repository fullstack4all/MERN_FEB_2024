import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Header from './modules/header.js'

import './components.css'

import MainSection from './Pages/section1/mianSection.js'

import Counter from './count.js'
import User from './Users/newUser.js'

import NewPlace  from './Pages/section1/newPlace.js'
function App() {
  return (
    <Router>

   <Header />

   <Switch>

   <Route path='/'exact >
    <MainSection />
    <Counter />
    <User />
    </Route>

    <Route path='/newplace' exact>
      <NewPlace/>
    </Route>
   </Switch>
 
   
   
   
    </Router>


  );
}

export default App;
