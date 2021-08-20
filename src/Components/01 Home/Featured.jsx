import React, { useEffect, useState } from 'react';
import { FeaturedContainer, FeaturedDiv, Title, Item, PicDiv, ItemPic, ItemText, Price } from './Styles/Featured.style';
import { dummyData } from '../../../data/dummyData';

const Featured = () => {
  var [divTop, setDivTop] = useState('110px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 575) {
      setDivTop('66px');
    } else {
      setDivTop('110px');
    }
  }

  return (
    <FeaturedContainer top={divTop}>
        <Title>Featured Menu Items</Title>
      <FeaturedDiv>
        {dummyData.map(item => {
          return (
            <Item>
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