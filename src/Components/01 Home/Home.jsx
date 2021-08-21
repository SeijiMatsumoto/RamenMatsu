import React from 'react';
import Carousel from './Carousel.jsx';
import Featured from './Featured.jsx';
import HowItsMade from './HowItsMade.jsx';
import LocationHours from './LocationHours.jsx';
import { HomeDiv } from './Styles/Home.style.js';

const Home = () => {
  return (
    <HomeDiv id='home'>
      <Carousel />
      <Featured />
      <HowItsMade />
      <LocationHours />
    </HomeDiv>

  );
};

export default Home;