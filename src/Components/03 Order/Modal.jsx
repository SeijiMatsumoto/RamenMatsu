import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { ModalDiv, Image, TextDiv, Name, QuantityDiv, QuantityBtn, Quantity, BottomHalfDiv, Desc, BtnDiv, CloseBtn, Add, Price } from './Styles/Modal.style';

const Modal = (props) => {

  var [quantity, setQuantity] = useState(1);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '600px',
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