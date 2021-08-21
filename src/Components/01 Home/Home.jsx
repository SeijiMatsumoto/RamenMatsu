import React from 'react';
import Carousel from './Carousel.jsx';
import Featured from './Featured.jsx';
import HowItsMade from './HowItsMade.jsx';

const Home = () => {
  return (
    <div id='home'>
      <Carousel />
      <Featured />
      <HowItsMade />
    </div>

  );
};

export default Home;