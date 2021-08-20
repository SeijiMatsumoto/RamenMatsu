import React, { useEffect, useState } from 'react';
import { NavbarContainer, Logo, SmallLogo, NavLinks, NavUL, NavLi, Cart, Menu } from './Styles/Navbar.style.js';
import { Link } from "react-router-dom";

const Navbar = () => {
  var [navHeight, setNavHeight] = useState('150px');
  var [linksWidth, setLinksWidth] = useState('60vw');
  var [showLinks, setShowLinks] = useState(true);
  var [iconTop, setIconTop] = useState('10px');
  var [navTop, setNavTop] = useState('10px');
  var [smallLogo, setSmallLogo] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 575) {
      setNavHeight('67px');
      setLinksWidth('75vw');
      setShowLinks(false);
      setIconTop('0');
      setNavTop('0');
      setSmallLogo(true);
    } else {
      setNavHeight('110px');
      setLinksWidth('55vw');
      setShowLinks(true);
      setIconTop('13px');
      setNavTop('10px');
      setSmallLogo(false);
    }
  }

  return (
    <NavbarContainer height={navHeight}>
      { !smallLogo ? <Logo src='https://i.imgur.com/eGfbcRj.png' /> : <SmallLogo src='https://i.imgur.com/XJkYHdd.png' /> }
      <NavLinks width={linksWidth} top={navTop}>
        {showLinks ?
        <NavUL>
          <NavLi><Link to='/'>Home</Link></NavLi>
          <NavLi>About</NavLi>
          <NavLi><Link to='/order'>Order Now</Link></NavLi>
        </NavUL>
        : null }
        <Cart top={iconTop} className='fas fa-shopping-cart fa-lg' />
        {!showLinks ? <Menu top={iconTop} className='fas fa-bars fa-lg' /> : null }
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;