import React from 'react';
import { MenuItemContainer, TextDiv, Image, Name, Desc, Price } from './Styles/MenuItem.style';

const MenuItem = (props) => {
  var name = props.name;
  var price = props.price.toFixed(2);
  var desc= props.desc;
  var image = props.image;

  return (
    <MenuItemContainer>
      <TextDiv>
        <Name>{name}</Name> <br/>
        <Desc>{desc}</Desc> <br/>
        <Price>${price}</Price><br/>
      </TextDiv>
      <Image src={image}></Image>
    </MenuItemContainer>
  );
};

export default MenuItem;