import React from 'react';
import { MenuContainer, Nav, UL, LI } from './Styles/Menu.style';

const Menu = () => {
  return (
    <MenuContainer>
      <Nav>
        <UL>
          <LI>Ramen</LI>
          <LI>Sets</LI>
          <LI>Beverages</LI>
        </UL>
      </Nav>
    </MenuContainer>
  );
};

export default Menu;