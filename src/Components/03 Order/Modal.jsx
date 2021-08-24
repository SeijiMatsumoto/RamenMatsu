import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { ModalDiv, Image, TextDiv, Name, QuantityDiv, QuantityBtn, Quantity, BottomHalfDiv, Desc, BtnDiv, CloseBtn, Add, Price, ModifiersDiv, Label, Modifier, Checkbox, ModifierTitle, ModifierPrice, ModContainer } from './Styles/Modal.style';

const Modal = (props) => {

  var [quantity, setQuantity] = useState(1);
  var [modalWidth, setModalWidth] = useState('600px');

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 700) {
      setModalWidth('90vw');
    } else {
      setModalWidth('600px');
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: modalWidth,
      height: '90%',
      margin: '0',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  return (
    <ModalDiv>
      <ReactModal
        isOpen={props.show}
        contentLabel="onRequestClose"
        onRequestClose={props.handleCloseModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <Image src={props.image} alt='food' /> <br />
        <TextDiv>
          <Name>{props.name}</Name>
          <BottomHalfDiv>
            <Desc>{props.desc}</Desc>
            <QuantityDiv>
              <QuantityBtn onClick={decreaseQuantity}>-</QuantityBtn>
              <Quantity>{quantity}</Quantity>
              <QuantityBtn onClick={increaseQuantity}>+</QuantityBtn>
            </QuantityDiv>
          </BottomHalfDiv>
        </TextDiv>
        <ModifiersDiv>
          <ModifierTitle>Extra ramen toppings</ModifierTitle>
          <ModifierTitle font={'15px'}>Select all that apply</ModifierTitle>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
          <Modifier className="form-check">
            <Checkbox>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            </Checkbox>
            <ModContainer>
            <Label className="form-check-label" htmlFor="defaultCheck1">
              Default checkbox
            </Label>
            <ModifierPrice>$1.00</ModifierPrice>
            </ModContainer>
          </Modifier>
        </ModifiersDiv>
        <BtnDiv>
        <CloseBtn onClick={props.handleCloseModal}>X</CloseBtn>
        <Add onClick={() => {
          props.addToCart({
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: quantity
          });
          props.handleCloseModal();
        }
        }>Add to order<Price margin={'10px'}>${(props.price * quantity).toFixed(2)}</Price></Add>
      </BtnDiv>
      </ReactModal>
    </ModalDiv >
  );
};

export default Modal;