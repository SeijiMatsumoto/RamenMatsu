import React from 'react';
import { CartContainer, Top, Title, CloseBtn } from './Styles/Cart.style.js';

const Cart = (props) => {

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
  }

  return (
    <CartContainer id='mySidenav' class='sidenav'>
      <Top>
        <Title>Cart</Title>
        <CloseBtn class="closebtn" onClick={closeNav}>X</CloseBtn>
      </Top>
    </CartContainer>
  );
};

export default Cart;