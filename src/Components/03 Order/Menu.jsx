import React from 'react';
import { MenuContainer, Nav, UL, LI, A, Body, Title, RamenDiv, SetsDiv, BeveragesDiv } from './Styles/Menu.style';

const Menu = () => {
  return (
    <MenuContainer>
      <Nav>
        <UL>
          <LI><A href='#ramen'>Ramen</A></LI>
          <LI><A href='#sets'>Sets</A></LI>
          <LI><A href='#beverages'>Beverages</A></LI>
        </UL>
      </Nav>
      <Body>
        <RamenDiv id='ramen'>
          <Title>Ramen</Title>
        </RamenDiv>
        <SetsDiv id='sets'>
          <Title>Sets</Title>
        </SetsDiv>
        <BeveragesDiv id='beverages'>
          <Title>Beverages</Title>
        </BeveragesDiv>
      </Body>
    </MenuContainer>
  );
};

export default Menu;