import styled from 'styled-components';

export const CartContainer = styled.div`
  position: relative;
  top: 0;
  padding: 15px;
  width: 23%;
  /* height: 400px; // temporary */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: yellow;
`;

export const Title = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid black;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  width: 100%;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  width: 140px;
  justify-content: space-between;

`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-align: right;
  justify-content: space-between;
`;


export const ItemName = styled.div`
`;

export const Quantity = styled.input`
  width: 50px;
  border-radius: 5px;
`;

export const Price = styled.div`
`;

export const Remove = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TotalLeft = styled.div`
  font-weight: bold;
  display: inline-flex;
`;

export const TotalRight = styled.div`
`;

export const TipContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 5px;
`;

export const Percentages = styled.div`
  display: inline-flex;
  position: relative;
  width: 95%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #F2F2F2;
  overflow: hidden;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  width: 25%;
  cursor: pointer;
  &:hover {

  };
`;

export const Custom = styled.div`
  position: relative;
  width: 95%;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
`;