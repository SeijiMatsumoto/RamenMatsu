import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu.jsx';
import { NavbarContainer, Logo, SmallLogo, NavLinks, NavUL, NavLi, CartButton, MenuButton } from './Styles/Navbar.style.js';
import { Link } from "react-router-dom";

const Navbar = (props) => {
  var [navHeight, setNavHeight] = useState('150px');
  var [linksWidth, setLinksWidth] = useState('60vw');
  var [showLinks, setShowLinks] = useState(true);
  var [iconTop, setIconTop] = useState('10px');
  var [navTop, setNavTop] = useState('10px');
  var [smallLogo, setSmallLogo] = useState(false);
  var [menuWidth, setMenuWidth] = useState('400px');
  var [navPos, setNavPos] = useState('sticky');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (width <= 575) {
      setNavHeight('67px');
      setLinksWidth('75vw');
      setShowLinks(false);
      setIconTop('0');
      setNavTop('0');
      setSmallLogo(true);
      setMenuWidth('100vw');
      setNavPos('sticky');
    } else {
      setNavHeight('110px');
      setLinksWidth('55vw');
      setShowLinks(true);
      setIconTop('13px');
      setNavTop('10px');
      setSmallLogo(false);
      setMenuWidth('400px');
      setNavPos('sticky');
    }

    if (height <= 500) {
      setNavHeight('67px');
      setLinksWidth('75vw');
      setIconTop('0');
      setNavTop('0');
      setNavPos('absolute');
      setShowLinks(false);
      setMenuWidth('100vw');
    }
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = menuWidth;
  }

  const openMenu = () => {
    document.getElementById("mySidemenu").style.width = menuWidth;
  }

  const goHome = () => {
    window.open('http://localhost:3002', '_self');
  }

  return (
    <NavbarContainer height={navHeight} position={navPos} id='navbar'>
      {!smallLogo ? <Logo src='https://i.imgur.com/eGfbcRj.png' onClick={goHome}/>: <SmallLogo src='https://i.imgur.com/XJkYHdd.png' onClick={goHome}/>}
      <NavLinks width={linksWidth} top={navTop}>
        {showLinks ?
          <NavUL>
            <NavLi><Link id='link' to='/'>Home</Link></NavLi>
            {/* <NavLi>About</NavLi> */}
            <NavLi><Link id='link' to='/order'>Order Now</Link></NavLi>
          </NavUL>
          : null}
        <CartButton top={iconTop} onClick={openNav} className='fas fa-shopping-cart fa-lg' />
        {!showLinks ? <MenuButton onClick={openMenu} className='fas fa-bars fa-lg'/> : null}
        <SideMenu />
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

/*
            <Link className="dropdown-item" id='link' to='/'>Home</Link>
            <Link className="dropdown-item">About</Link>
            <Link className="dropdown-item" id='link' to='/order'>Order</Link>
*/