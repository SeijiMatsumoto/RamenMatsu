import React, { useEffect, useState } from 'react';
import { FeaturedContainer, FeaturedDiv, Title, Item, PicDiv, ItemPic, ItemText, Price } from './Styles/Featured.style';
import { dummyData } from '../../../data/dummyData';

const Featured = () => {
  var [cardWidth, setCardWidth] = useState('350px');


  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;
    if (width <= 500) {
      setCardWidth('75vw');
    } else {
      setCardWidth('350px');
    }
  }

  return (
    <FeaturedContainer>
      <Title>Featured Menu Items</Title>
      <FeaturedDiv>
        {dummyData.map(item => {
          return (
            <Item key={item.image} width={cardWidth}>
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