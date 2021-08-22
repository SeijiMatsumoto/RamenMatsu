import React, { useState, useEffect } from 'react';
import { BottomContainer } from './Styles/Bottom.style.js';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';
const Bottom = () => {
  var [showCart, setShowCart] = useState(true);
  var [bottomWidth, setBottomWidth] = useState('80%');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 1000) {
      setShowCart(false);
      setBottomWidth('90%')
    } else {
      setBottomWidth('80%');
      setShowCart(true);
    }
  }

  return (
    <BottomContainer width={bottomWidth}>
      <Menu></Menu>
      {showCart ? <Cart></Cart> : null}
    </BottomContainer>
  );
};

export default Bottom;