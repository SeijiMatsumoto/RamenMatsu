import React, { useEffect, useState } from 'react';
import { FeaturedContainer, FeaturedDiv, ProductName, Title, Item, PicDiv, ItemPic, ItemText, Price } from './Styles/Featured.style';
import { featured } from '../../../data/featuredData.js';

const Featured = () => {
  var [cardWidth, setCardWidth] = useState('350px');
  var [data, setData] = useState(featured)

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 500) {
      setCardWidth('80vw');
    } else {
      setCardWidth('350px');
    }
  }

  return (
    <FeaturedContainer>
      <Title>Featured Menu Items</Title>
      <FeaturedDiv>
        {data.map(item => {
          return (
            <Item key={item.image} width={cardWidth}>
              <PicDiv>
                <ItemPic src={item.image}/>
              </PicDiv>
              <ItemText>
                <ProductName>{item.name}</ProductName>
                <br/>
                {item.description}
                <br/>
              </ItemText>
              <Price>${item.price}</Price>
            </Item>
          )
        })}
      </FeaturedDiv>
    </FeaturedContainer>
  );
};

export default Featured;