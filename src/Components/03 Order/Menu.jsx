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

  // useEffect(() => {
  //   setRamenData(props.ramen);
  // }, [props.ramen])

  // useEffect(() => {
  //   if (props.sets) {
  //     setSetsData(props.sets);
  //   }
  // }, [props.sets])

  // useEffect(() => {
  //   if (props.drinks) {
  //     setDrinksData(props.drinks);
  //   }
  // }, [props.drinks])


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
          {ramenData ?
            ramenData.map((each, i) => {
              return (
                <MenuItem key={each.url + i.toString()} addToCart={props.addToCart} name={each.name} image={each.image} desc={each.description} price={each.price}></MenuItem>
              )
            }) : null}
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
          {drinksData ?
            drinksData.map((each, i) => {
              return (
                <MenuItem key={each.url + i.toString()} addToCart={props.addToCart} name={each.name} image={each.image} desc={each.description} price={each.price}></MenuItem>
              )
            }) : null}
        </BeveragesDiv>
      </Body>
    </MenuContainer>
  );
};

export default Menu;