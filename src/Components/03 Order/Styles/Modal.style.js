import styled from 'styled-components';

export const ModalDiv = styled.div`
  z-index: 100;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const BtnDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  left: 20px;
  z-index: 1;
  flex-direction: row;
  width: 90%;
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 50px;
  height: 45px;
  border-radius: 50%;
  background-color: #dedfe2;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #d4d7dd;
  }
`;

export const Add = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 25px;
  background-color: #556475;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #475563;
  }
`;

export const Image =styled.img `
  position: absolute;
  width: 100%;
  height: 300px;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const TextDiv = styled.div`
  width: 100%;
  height: 175px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 265px;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
`;

export const BottomHalfDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  position: relative;
  font-size: 25px;
`;

export const Desc = styled.div`
position: relative;
`;

export const Price = styled.div`
  position: relative;
  margin-left: ${props => props.margin || '0'};
`;

export const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuantityBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #dedfe2;
  cursor: pointer;

  &:hover {
    background-color: #d4d7dd;
  }
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;

  width: 50px;
`;

