import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu.jsx';
import NavCart from './NavCart.jsx';
import { NavbarContainer, Logo, SmallLogo, NavLinks, NavUL, NavLi, CartButton, MenuButton } from './Styles/Navbar.style.js';
import { Link } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import { checkLocalStorage, updateLocalStorage } from '../helper.js';

const Navbar = (props) => {
  var [navHeight, setNavHeight] = useState('150px');
  var [linksWidth, setLinksWidth] = useState('60vw');
  var [showLinks, setShowLinks] = useState(true);
  var [iconTop, setIconTop] = useState('10px');
  var [navTop, setNavTop] = useState('10px');
  var [smallLogo, setSmallLogo] = useState(false);
  var [menuWidth, setMenuWidth] = useState('400px');
  var [showCart, setShowCart] = useState(false);
  var [showMenu, setShowMenu] = useState(false);
  var [data, setData] = useState([]);
  var [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    setData(checkLocalStorage());
  }, [])

  const removeFromCart = (index) => {
    console.log('Filtered:', data.filter(item => item.i !== index));
    setData(data.filter(item => item.i !== index));
  }

  useEffect(() => {
    if (firstLoad) {
      if (data.length) {
        data.forEach((item, j) => item.i = j);
        updateLocalStorage(data);
        setFirstLoad(false);
      }
    } else {
      if (data.length) {
        data.forEach((item, j) => item.i = j);
        updateLocalStorage(data);
        setFirstLoad(false);
      } else {
        updateLocalStorage([]);
      }
    }
  }, [data])

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
    } else {
      setNavHeight('110px');
      setLinksWidth('55vw');
      setShowLinks(true);
      setIconTop('13px');
      setNavTop('10px');
      setSmallLogo(false);
      setMenuWidth('400px');
    }

    if (height <= 500) {
      setNavHeight('67px');
      setLinksWidth('75vw');
      setIconTop('0');
      setNavTop('0');
      setShowLinks(false);
      setMenuWidth('100vw');
    }
  }

  const openNav = () => {
    setShowCart(true);
    setData(checkLocalStorage());
  }

  const openMenu = () => {
    setShowMenu(true);
  }

  useEffect(() => {
    var menu = document.querySelector('#sideCart');
    if (showCart) {
      anime({
        targets: menu,
        translateY: '-100vh',
        easing: 'linear',
        duration: 200
      });
    } else if (!showCart) {
      anime({
        targets: menu,
        translateY: 0,
        easing: 'linear',
        duration: 200
      });
    }
  }, [showCart])

  useEffect(() => {
    var menu = document.querySelector('#mySidemenu');
    if (showMenu) {
      anime({
        targets: menu,
        translateX: '-100vw',
        easing: 'linear',
        duration: 200
      });
    } else if (!showMenu) {
      anime({
        targets: menu,
        translateX: 0,
        easing: 'linear',
        duration: 200
      });
    }
  }, [showMenu])

  const goHome = () => {
    window.open('http://localhost:3002', '_self');
  }

  return (
    <NavbarContainer height={navHeight} id='navbar'>
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
        <NavCart width={menuWidth} setShowCart={setShowCart} removeFromCart={removeFromCart} data={data}/>
        {!showLinks ? <MenuButton onClick={openMenu} className='fas fa-bars fa-lg'/> : null}
        <SideMenu setShowMenu={setShowMenu}/>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;