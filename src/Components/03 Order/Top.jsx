import React, { useEffect, useState } from 'react';
import { TopContainer, Title } from './Styles/Top.style.js';

const Top = () => {
  var [topHeight, setTopHeight] = useState('400px');
  var [topFont, setTopFont] = useState('100px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 1000) {
      setTopHeight('200px');
      setTopFont('50px')
    } else {
      setTopHeight('400px');
      setTopFont('100px')
    }
  }
  return (
    <TopContainer height={topHeight}>
      <Title font={topFont}>Order</Title>
    </TopContainer>
  );
};

export default Top;