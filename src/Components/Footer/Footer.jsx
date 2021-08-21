import React, { useState, useEffect } from 'react';
import { FooterContainer, Group, Column, Title } from './Styles/Footer.style';
import { Link } from 'react-router-dom';


const Footer = () => {
  var [direction, setDirection] = useState('row');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 650) {
      setDirection('column')
    } else {
      setDirection('row');
    }
  }

  return (
    <FooterContainer dir={direction}>
      <Group>
        <Column>
          <Title>Links</Title>
          <Link id='link' to='/'>Home</Link> <br />
          <Link id='link'>About</Link> <br />
          <Link id='link' to='/order'>Order Now</Link>
        </Column>

        <Column>
          <Title>Location</Title>
          207 Closter Dock Road
          <br />
          Closter, 07624, NJ
          <br />
          <a href='https://www.google.com/maps/place/Ramen+Matsu/@40.9739456,-73.964508,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2efad9d62a7a9:0x8c24d83a9c0490bc!8m2!3d40.9739292!4d-73.9623881' target='_blank' rel='noreferrer'> Open in Maps</a>
        </Column>
      </Group>
      <Group>
        <Column>
          <Title>Social Media</Title>
          <a id='link' href='https://www.instagram.com/ramenmatsu_nj/' target='_blank' rel='noreferrer'>Instagram</a> <br />
          <a id='link' href='https://www.facebook.com/ramenmatsunj' target='_blank' rel='noreferrer'>Facebook</a> <br />
          <a id='link' href='http://jirosramen.com' target='_blank' rel='noreferrer'>Chef's Blog</a>
        </Column>
        <Column>
          <Title>Contact</Title>
          <a href='tel:2013839990'>201-383-9990</a><br />
          <a href='email:ramenmatsu@gmail.com'>ramenmatsu@gmail.com</a>
        </Column>
      </Group>
    </FooterContainer>
  );
};

export default Footer;