import React from 'react';
import { Side, Top, Title, CloseBtn } from './Styles/SideMenu.style';

const SideMenu = () => {

  const closeMenu = () => {
    document.getElementById("mySidemenu").style.width = "0px";
  }

  return (
    <Side id='mySidemenu'>
      <Top>
        <Title>Ramen Matsu</Title>
        <CloseBtn className="closebtn" onClick={closeMenu}>X</CloseBtn>
      </Top>
    </Side>
  );
};

export default SideMenu;