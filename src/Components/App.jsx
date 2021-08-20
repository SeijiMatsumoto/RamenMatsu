import React from 'react';
import { Main } from '../Styles/App.style.js'
import Navbar from './Nav/Navbar.jsx';
import Home from './01 Home/Home.jsx';
import Order from './03 Order/Order.jsx';
import Cart from './Cart/Cart.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
        <Cart />
      </Main>
    </Router>
  )
};

export default App;