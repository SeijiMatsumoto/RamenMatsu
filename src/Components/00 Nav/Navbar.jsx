import React, { useEffect, useState } from 'react';
import { NavbarContainer, NavLinks, NavUL, NavLi, Cart, Menu } from './Styles/Navbar.style.js';

const Navbar = () => {
  var [navHeight, setNavHeight] = useState('150px');
  var [linksWidth, setLinksWidth] = useState('60vw');
  var [navTop, setNavTop] = useState('5px');
  var [showLinks, setShowLinks] = useState(true);
  var [iconTop, setIconTop] = useState('10px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 575) {
      setNavHeight('67px');
      setLinksWidth('90vw');
      setNavTop('0');
      setShowLinks(false);
      setIconTop('0');
    } else {
      setNavHeight('110px');
      setLinksWidth('60vw');
      setNavTop('10px');
      setShowLinks(true);
      setIconTop('32px');
    }
  }

  return (
    <NavbarContainer height={navHeight}>
      <NavLinks width={linksWidth} top={navTop}>
        {showLinks ?
        <NavUL>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>Order</NavLi>
        </NavUL>
        : null }
        <Cart top={iconTop} className='fas fa-shopping-cart fa-lg' />
        {!showLinks ? <Menu top={iconTop} className='fas fa-bars fa-lg' /> : null }
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;