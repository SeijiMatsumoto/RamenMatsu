import React, { useState, useEffect } from 'react';
import { MenuContainer, Nav, UL, LI, A, Body, Title, RamenDiv, SetsDiv, BeveragesDiv } from './Styles/Menu.style';
import MenuItem from './MenuItem.jsx';
import { ramen, sets, drinks } from '../../../data/menuData.js';

const Menu = (props) => {
  var [justify, setJustify] = useState('center');
  var [ramenData, setRamenData] = useState(ramen);
  var [setsData, setSetsData] = useState(sets);
  var [drinksData, setDrinksData] = useState(drinks);


  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 1654) {
      setJustify('center');
    } else {
      setJustify('flex-start');

    }
  }

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

        <Title id='ramen'>Ramen</Title>
        <RamenDiv justify={justify}>
          {ramenData.map((each, i) => {
            return (
              <MenuItem key={each.url + i.toString()} addToCart={props.addToCart} name={each.name} image={each.image} desc={each.description} price={each.price}></MenuItem>
            )
          })}
        </RamenDiv>

        <Title id='sets'>Sets</Title>
        <SetsDiv justify={justify}>
          {setsData.map((each, i) => {
            return (
              <MenuItem key={each.url + i.toString()} addToCart={props.addToCart} name={each.name} image={each.image} desc={each.description} price={each.price}></MenuItem>
            )
          })}
        </SetsDiv>

        <Title id='beverages'>Beverages</Title>
        <BeveragesDiv justify={justify}>
          {drinksData.map((each, i) => {
            return (
              <MenuItem key={each.url + i.toString()} addToCart={props.addToCart} name={each.name} image={each.image} desc={each.description} price={each.price}></MenuItem>
            )
          })}
        </BeveragesDiv>
      </Body>
    </MenuContainer>
  );
};

export default Menu;