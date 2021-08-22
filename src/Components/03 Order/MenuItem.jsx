import React, { useState, useEffect } from 'react';
import { MenuItemContainer, TextDiv, Image, Name, DescPrice, Desc, Price } from './Styles/MenuItem.style';

const MenuItem = (props) => {
  var name = props.name;
  var price = props.price.toFixed(2);
  var desc = props.desc;
  var image = props.image;

  var [itemWidth, setItemWidth] = useState('480px');
  var [itemHeight, setItemHeight] = useState('175px');
  var [descFont, setDescFont] = useState('15px');
  var [nameFont, setNameFont] = useState('15px');
  var [margin, setMargin] = useState('10px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 500) {
      setItemWidth('100%');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('5px');
    } else if (width <= 630) {
      setItemWidth('100%');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('10px');
    } else {
      setItemWidth('509px');
      setItemHeight('175px');
      setDescFont('15px');
      setNameFont('15px');
      setMargin('10px');
    }
  }

  return (
    <MenuItemContainer width={itemWidth} height={itemHeight} margin={margin}>
      <TextDiv>
        <Name font={nameFont}>{name}</Name>
        <DescPrice>
          <Desc font={descFont}>{desc}</Desc>
          <Price>${price}</Price>
        </DescPrice>
      </TextDiv>
      <Image src={image}></Image>
    </MenuItemContainer>
  );
};

export default MenuItem;