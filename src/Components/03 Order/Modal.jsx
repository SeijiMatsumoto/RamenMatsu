import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { ModalDiv } from './Styles/Modal.style';

const Modal = (props) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '600px',
      height: '80%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <ModalDiv>
      <ReactModal
        isOpen={props.show}
        contentLabel="onRequestClose"
        onRequestClose={props.handleCloseModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <button onClick={props.handleCloseModal}>Close Modal</button><br/>
        {props.name} <br />
        {props.desc} <br />
        {props.price} <br />
        <img src={props.image} alt='food'/> <br />
      </ReactModal>
    </ModalDiv>
  );
};

export default Modal;