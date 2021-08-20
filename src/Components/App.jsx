import React from 'react';
import { Main } from '../Styles/App.style.js'
import Navbar from './00 Nav/Navbar.jsx';
import Home from './01 Home/Home.jsx';
import Order from './03 Order/Order.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/order' component={Order} />
        </Switch>
      </Main>
    </Router>
  )
};

export default App;