import React, { useState, useEffect } from 'react';
import { Main } from './App.style.js'
import Navbar from './Nav/Navbar.jsx';
import Home from './01 Home/Home.jsx';
import Order from './03 Order/Order.jsx';
import NavCart from './Nav/NavCart.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Main>
        <div id='main'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/order' component={Order} />
          </Switch>
        </div>
        <Footer />
      </Main>
    </Router>
  )
};

export default App;