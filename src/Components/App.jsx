import React from 'react';
import { Main } from '../Styles/App.style.js'
import Navbar from './00 Nav/Navbar.jsx';
import Home from './01 Home/Home.jsx';
import Order from './03 Order/Order.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/order' component={Order} />
        </Switch>
        <Footer />
      </Main>
    </Router>
  )
};

export default App;