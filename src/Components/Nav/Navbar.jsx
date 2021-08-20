import React, { useEffect, useState } from 'react';
import { NavbarContainer, Logo, SmallLogo, NavLinks, NavUL, NavLi, CartButton, MenuButton } from './Styles/Navbar.style.js';
import { Link } from "react-router-dom";

const Navbar = () => {
  var [navHeight, setNavHeight] = useState('150px');
  var [linksWidth, setLinksWidth] = useState('60vw');
  var [showLinks, setShowLinks] = useState(true);
  var [iconTop, setIconTop] = useState('10px');
  var [navTop, setNavTop] = useState('10px');
  var [smallLogo, setSmallLogo] = useState(false);
  var [cartWidth, setCartWidth] = useState('400px');

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
      setIconTop('3px');
      setNavTop('0');
      setSmallLogo(true);
      setCartWidth('100vw');
    } else {
      setNavHeight('110px');
      setLinksWidth('55vw');
      setShowLinks(true);
      setIconTop('13px');
      setNavTop('10px');
      setSmallLogo(false);
      setCartWidth('400px');
    }
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = cartWidth;
  }

  return (
    <NavbarContainer height={navHeight} id='navbar'>
      {!smallLogo ? <Logo src='https://i.imgur.com/eGfbcRj.png' /> : <SmallLogo src='https://i.imgur.com/XJkYHdd.png' />}
      <NavLinks width={linksWidth} top={navTop}>
        {showLinks ?
          <NavUL>
            <NavLi><Link id='link' to='/'>Home</Link></NavLi>
            <NavLi>About</NavLi>
            <NavLi><Link id='link' to='/order'>Order Now</Link></NavLi>
          </NavUL>
          : null}
        <CartButton top={iconTop} onClick={openNav} className='fas fa-shopping-cart fa-lg' />
        <div class="dropdown dropright">
          {!showLinks ? <MenuButton className='fas fa-bars fa-lg' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /> : null}
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" id='link' to='/'>Home</Link>
            <Link className="dropdown-item">About</Link>
            <Link className="dropdown-item" id='link' to='/order'>Order</Link>
          </div>
        </div>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;