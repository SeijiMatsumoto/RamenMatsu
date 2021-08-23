import React, { useEffect, useState } from 'react';
import { TopContainer, Title } from './Styles/Top.style.js';

const Top = () => {
  var [topHeight, setTopHeight] = useState('400px');
  var [topFont, setTopFont] = useState('100px');
  var [topWidth, setTopWidth] = useState('80%');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])


  const resize = () => {
    var width = window.innerWidth;

    if (width <= 1000) {
      setTopHeight('200px');
      setTopFont('50px');
      setTopWidth('80%');
    } else {
      setTopHeight('400px');
      setTopFont('100px')
      setTopWidth('70%');
    }
  }
  return (
    <TopContainer height={topHeight}>
      <Title font={topFont} width={topWidth}>Order</Title>
    </TopContainer>
  );
};

export default Top;