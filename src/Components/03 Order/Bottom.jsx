import React from 'react';
import { BottomContainer } from './Styles/Bottom.style.js';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';
const Bottom = () => {
  return (
    <BottomContainer>
      <Menu></Menu>
      <Cart></Cart>
    </BottomContainer>
  );
};

export default Bottom;