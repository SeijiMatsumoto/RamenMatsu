import React, { useEffect, useState } from 'react';
import { LocHoursContainer, Title, LocHoursDiv, MapDiv, TextDiv, LocationDiv, SectionTitle, Address, HoursDiv, Hours } from './Styles/LocationHours.style';

const LocationHours = () => {
  var [cardWidth, setCardWidth] = useState('700px');
  var [fontSize, setFontSize] = useState('16px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 450) {
      setCardWidth('85vw');
      setFontSize('15px');
    } else if (width <= 800) {
      setCardWidth('85vw');
      setFontSize('16px');
    } else {
      setCardWidth('700px');
      setFontSize('20px');
    }
  }
  return (
    <LocHoursContainer>
      <Title>Location and Hours</Title>
      <LocHoursDiv>
        <MapDiv width={cardWidth}>
          <div className='mapouter'>
            <div className='gmap_canvas'>
              <iframe title='map' width='100%' height='360' id='gmap_canvas' src='https://maps.google.com/maps?q=ramen%20matsu&t=&z=15&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='yes' marginHeight='0' marginWidth='0' />
            </div>
          </div>
        </MapDiv>
        <TextDiv width={cardWidth}>
          <LocationDiv>
            <SectionTitle>Location</SectionTitle>
            <Address font={fontSize}>
              207 Closter Dock Road
              <br />
              Closter, 07624, NJ
              <br />
              <a href='tel:2013839990'>201-383-9990</a>
              <br />
              <br />
              <a href='https://www.google.com/maps/place/Ramen+Matsu/@40.9739456,-73.964508,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2efad9d62a7a9:0x8c24d83a9c0490bc!8m2!3d40.9739292!4d-73.9623881' target='_blank' rel='noreferrer'> Open in Maps</a>
            </Address>
          </LocationDiv>
          <HoursDiv>
            <SectionTitle>Hours</SectionTitle>
            <Hours font={fontSize}>
              Sun: 11:30am - 3pm
              <br />
              Mon: Closed
              <br />
              Tues: 11:30am - 3pm; 5pm - 8pm
              <br />
              Wed: 11:30am - 3pm; 5pm - 8pm
              <br />
              Thurs: 11:30am - 3pm; 5pm - 8pm
              <br />
              Fri: 11:30am - 3pm; 5pm - 8pm
              <br />
              Sat: 11:30am - 3pm; 5pm - 8pm
            </Hours>
          </HoursDiv>
        </TextDiv>
      </LocHoursDiv>
    </LocHoursContainer>
  );
};

export default LocationHours;