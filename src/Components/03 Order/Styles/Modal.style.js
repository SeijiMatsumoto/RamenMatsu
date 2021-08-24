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
  /* height: 200px; */
  position: relative;
  display: flex;
  flex-direction: column;
  top: 265px;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
`;

export const BottomHalfDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  position: relative;
  font-size: 25px;
`;

export const Desc = styled.div`
position: relative;
margin-bottom: 20px;
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

export const ModifiersDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  top: 280px;
`;

export const ModifierTitle = styled.div`
  font-size: ${props => props.font || '18px'};
`;

export const Modifier = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid #E5E5E5;
  font-size: 25px;
`;

export const Checkbox = styled.div`
  position: absolute;
  margin-top: 0;
`;

export const ModContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-left: 5px;
  /* border: 1px solid red; */

`;

export const ModifierPrice = styled.div`
  /* border: 1px solid red; */
  font-size: 16px;
  width: 30%;
  text-align: right;
`;