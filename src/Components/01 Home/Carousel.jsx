import React, { useEffect, useState } from 'react';
import { CarouselContainer, TitleDiv, Title, OrderBtn } from './Styles/Carousel.style';
import { Link } from 'react-router-dom';

const Carousel = () => {
  var [titleWidth, setTitleWidth] = useState('500px');
  var [titleTop, setTitleTop] = useState('0');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 575) {
      setTitleWidth('70%');
      setTitleTop('-70px');
    } else {
      setTitleWidth('650px');
      setTitleTop('0px');
    }
  }

  const images = [
    'https://i.imgur.com/GfNgWSx.jpg',
    'https://i.imgur.com/BPvPYtQ.jpg',
    'https://i.imgur.com/CJl5yoo.jpg',
    'https://i.imgur.com/vBVGJi2.jpg'
  ];

  return (
    <CarouselContainer>
      <TitleDiv width={titleWidth}>
        <Title top={titleTop}>RAMEN MATSU</Title>
        <Link to='/order' id='linkWhite'><OrderBtn >ORDER NOW</OrderBtn></Link>
      </TitleDiv>
      <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
          <li data-target="#carouselIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={images[0]} alt="First slide" />
          </div>
          {images.splice(1).map(image => {
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={image} alt="Second slide" />
              </div>
            )
          })}
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