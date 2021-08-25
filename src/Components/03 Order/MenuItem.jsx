import React, { useState, useEffect } from 'react';
import { MenuItemContainer, TextDiv, Image, Name, DescPrice, Desc, Price, QuickAdd } from './Styles/MenuItem.style';
import Modal from './Modal.jsx';

const MenuItem = (props) => {
  var name = props.name;
  var price = props.price.toFixed(2);
  var desc = props.desc;
  var image = props.image;

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

    if (width <= 400) {
      setItemWidth('325px');
      setItemHeight('125px');
      setDescFont('11px');
      setNameFont('13px');
      setMargin('5px');
    } else if (width <= 450) {
      setItemWidth('380px');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('5px');
    } else if (width <= 500) {
      setItemWidth('450px');
      setItemHeight('125px');
      setDescFont('12px');
      setNameFont('13px');
      setMargin('5px');
    } else if (width <= 630) {
      setItemWidth('500px');
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
    document.getElementById('root').classList.add('noScroll');
  }

  const handleCloseModal = () => {
    setShowModal(false);
    document.getElementById('root').classList.remove('noScroll');

  }

  return (
    <div>
      <MenuItemContainer width={itemWidth} height={itemHeight} margin={margin}>
        <TextDiv>
          <Name onClick={handleOpenModal} font={nameFont}>{name}</Name>
          <DescPrice>
            <Desc onClick={handleOpenModal} font={descFont}>{desc}</Desc>
            <Price onClick={handleOpenModal}>${price}</Price>
            <QuickAdd onClick={() => {
              props.addToCart({
                name: props.name,
                price: props.price,
                image: props.image,
                quantity: 1
              })
            }
            }>Quick Add</QuickAdd>
          </DescPrice>
        </TextDiv>
        <Image src={image} onClick={handleOpenModal}></Image>
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