import styled from 'styled-components';

export const CartContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 15px;
  width: ${props => props.width || '350px'};
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  justify-content: center;
  box-shadow: ${props => props.shadow || 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'};
`;

export const Title = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid black;
  font-size: 25px;
  margin-bottom: 20px;
  text-align: left;
`;

export const NoItems = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  font-size: 15px;
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
  align-items: flex-start;
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
  border: 1px solid black;
`;

export const Price = styled.div`
`;

export const Remove = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: -20px;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;
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
  top: 10px;
`;

export const Percentages = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 50px;
  /* border: 1px solid black; */
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #F2F2F2;
  overflow: hidden;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-right: 1px solid black; */
  width: 25%;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #dbdbdb;
  };
`;

export const Custom = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 50px;
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: #F2F2F2;
  overflow: hidden;
`;

export const CustomTip = styled.input`
  position: relative;
  width: 75%;
`;

export const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

export const CompleteButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 5px 5px;
  border-radius: 25px;
  background-color: #5E6C7C;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;