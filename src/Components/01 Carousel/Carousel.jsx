import React, { useEffect, useState } from 'react';
import { CarouselContainer, TitleDiv, Title, OrderBtn } from './Styles/Carousel.style';

const Carousel = () => {
  var [titleWidth, setTitleWidth] = useState('500px');
  var [titleTop, setTitleTop] = useState('0');
  var [btnTop, setBtnTop] = useState('170px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 575) {
      setTitleWidth('70%');
      setTitleTop('-70px');
      setBtnTop('150px');
    } else {
      setTitleWidth('650px');
      setTitleTop('0px');
      setBtnTop('120px');
    }
  }

  const images = [
    'https://i.imgur.com/GfNgWSx.jpg',
    'https://i.imgur.com/BPvPYtQ.jpg',
    'https://i.imgur.com/CJl5yoo.jpg',
  ];

  return (
    <CarouselContainer>
      <TitleDiv width={titleWidth}>
        <Title top={titleTop}>RAMEN MATSU</Title>
        <OrderBtn top={btnTop}>ORDER NOW</OrderBtn>
      </TitleDiv>
      <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={images[0]} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={images[1]} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={images[2]} alt="Third slide" />
          </div>
        </div>
        {/* <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;