import React from 'react';
import { Main } from '../Styles/App.style.js'
import Navbar from './00 Nav/Navbar.jsx';
import Carousel from './01 Carousel/Carousel.jsx';

const App = () => {
  return (
    <Main>
      <Navbar />
      <Carousel />
    </Main>
  )
};

export default App;