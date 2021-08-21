import React, { useEffect, useState } from 'react';
import { FeaturedContainer, FeaturedDiv, Title, Item, PicDiv, ItemPic, ItemText, Price } from './Styles/Featured.style';
import { dummyData } from '../../../data/dummyData';

const Featured = () => {
  return (
    <FeaturedContainer>
      <Title>Featured Menu Items</Title>
      <FeaturedDiv>
        {dummyData.map(item => {
          return (
            <Item key={item.image}>
              <PicDiv>
                <ItemPic src={item.image}/>
              </PicDiv>
              <ItemText>
                {item.name}
                <br/>
                {item.description}
                <br/>
              </ItemText>
              <Price>{item.price}</Price>
            </Item>
          )
        })}
      </FeaturedDiv>
    </FeaturedContainer>
  );
};

export default Featured;