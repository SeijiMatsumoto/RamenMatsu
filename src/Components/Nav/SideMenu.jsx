import React from 'react';
import { Side, CloseBtn, NavLinks, NavUL, NavLi } from './Styles/SideMenu.style';
import { Link } from 'react-router-dom';

const SideMenu = (props) => {

  const closeMenu = () => {
    props.setShowMenu(false);
  }

  return (
    <Side id='mySidemenu'>
      <CloseBtn className="closebtn" onClick={closeMenu}>X</CloseBtn>
      <NavLinks>
        <NavUL>
          <NavLi><Link id='link' to='/' onClick={closeMenu}>Home</Link></NavLi>
          {/* <NavLi>About</NavLi> */}
          <NavLi><Link id='link' to='/order' onClick={closeMenu}>Order Now</Link></NavLi>
        </NavUL>
      </NavLinks>
    </Side>
  );
};

export default SideMenu;