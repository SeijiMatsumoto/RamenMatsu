import React, { useEffect, useState } from 'react';
import { HowItsMadeContainer, Title, Description, CardsDiv,
        CardContainer, ImageDiv, Image, ItemTitle, TextDiv, Text } from './Styles/HowItsMade.style.js'

const HowItsMade = () => {
  var [descFont, setDescFont] = useState('25px');
  var [cardWidth, setCardWidth] = useState('550px');
  var [cardHeight, setCardHeight] = useState('350px');
  var [textSize, setTextSize] = useState('12px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 850) {
      setDescFont('20px');
      setCardWidth('400px');
      setCardHeight('250px');
      setTextSize('11.2px');
    } else {
      setDescFont('25px');
      setCardWidth('550px');
      setCardHeight('350px');
      setTextSize('16px');
    }
  }

  var steps = [
    {
      image: 'https://i.imgur.com/0ggL3x2.jpg',
      title: '01. BROTH',
      description: `The broth consists of flavors from animal bones, vegetables, and fruits. It simmers for hours on end to extract maximum umami straight from the ingredients' cores. Each sip leaves you wanting more.`
    }, {
      image: 'https://i.imgur.com/hoQjAkX.jpg',
      title: '02. TARE',
      description: 'The tare comprises of the salty goodness from three different soy sauce types straight from Japan, with the ratio precisely measured by the Chef.'
    }, {
      image: 'https://i.imgur.com/nthNzBJ.jpg',
      title: '03. CHASHU',
      description: 'The chashu comes in many different forms and each one has been expertly refined by the Chef for perfect synergy with the savoriness of the steaming soup.'
    }, {
      image: 'https://i.imgur.com/PbKln4L.jpg',
      title: '04. NOODLES',
      description: 'The noodles are sourced from Sun Noodle and were chosen after trying many variations until we found the perfect one.'
    }, {
      image: 'https://i.imgur.com/EyB2Dap.jpg',
      title: '05. TOPPINGS',
      description: 'Each and every topping is flavored precisely to fuse smoothly with the rest of the bowl.'
    }, {
      image: 'https://i.imgur.com/EafvxtJ.jpg',
      title: '06. RAMEN',
      description: 'With all of those components combined, you have a delicious bowl of ramen. You won\'t find anything like it.'
    },
  ]

  return (
    <HowItsMadeContainer>
      <Title>How It's Made</Title>
      <Description font={descFont}>Our ramen is forumalted and crafted in-house by Chef Jiro. A bowl of ramen comprises of several factors that all add to its final product</Description>
      <CardsDiv>
        {steps.map(step => {
        return (
          <CardContainer key={step.image} width={cardWidth} height={cardHeight}>
            <ImageDiv>
              <Image src={step.image}/>
              <ItemTitle>{step.title}</ItemTitle>
            </ImageDiv>
            <TextDiv>
              <Text font={textSize}>{step.description}</Text>
            </TextDiv>
          </CardContainer>
        )
      })}
      </CardsDiv>
    </HowItsMadeContainer>
  );
};

export default HowItsMade;