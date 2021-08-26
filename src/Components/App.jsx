import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './App.style.js'
import Navbar from './Nav/Navbar.jsx';
import Home from './01 Home/Home.jsx';
import Order from './03 Order/Order.jsx';
import Checkout from './04 Checkout/Checkout.jsx';
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
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        </div>
        <Footer />
      </Main>
    </Router>
  )
};

export default App;