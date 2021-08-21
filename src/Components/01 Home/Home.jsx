import React from 'react';
import Carousel from './Carousel.jsx';
import Featured from './Featured.jsx';
import HowItsMade from './HowItsMade.jsx';
import LocationHours from './LocationHours.jsx';

const Home = () => {
  return (
    <div id='home'>
      <Carousel />
      <Featured />
      <HowItsMade />
      <LocationHours />
    </div>

  );
};

export default Home;