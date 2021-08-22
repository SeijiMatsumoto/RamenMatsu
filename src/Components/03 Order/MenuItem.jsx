import React, { useState, useEffect } from 'react';
import { MenuItemContainer, TextDiv, Image, Name, DescPrice, Desc, Price } from './Styles/MenuItem.style';
import Modal from './Modal.jsx';

const MenuItem = (props) => {
  var name = props.name;
  var price = props.price.toFixed(2);
  var desc = props.desc;
  var image = props.image;
  var i = props.i;

  var [showModal, setShowModal] = useState(false);
  var [itemWidth, setItemWidth] = useState('480px');
  var [itemHeight, setItemHeight] = useState('175px');
  var [descFont, setDescFont] = useState('15px');
  var [nameFont, setNameFont] = useState('15px');
  var [margin, setMargin] = useState('10px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 500) {
      setItemWidth('100%');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('5px');
    } else if (width <= 630) {
      setItemWidth('100%');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('10px');
    } else {
      setItemWidth('509px');
      setItemHeight('175px');
      setDescFont('15px');
      setNameFont('15px');
      setMargin('10px');
    }
  }

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      <MenuItemContainer width={itemWidth} height={itemHeight} margin={margin} onClick={handleOpenModal}>
        <TextDiv>
          <Name font={nameFont}>{name}</Name>
          <DescPrice>
            <Desc font={descFont}>{desc}</Desc>
            <Price>${price}</Price>
          </DescPrice>
        </TextDiv>
        <Image src={image}></Image>
      </MenuItemContainer>
      <Modal
        show={showModal}
        handleCloseModal={handleCloseModal}
        name={name}
        desc={desc}
        price={price}
        image={image}

        addToCart={props.addToCart}
      />
    </div>
  );
};

export default MenuItem;