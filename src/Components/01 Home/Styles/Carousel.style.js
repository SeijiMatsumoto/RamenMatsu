import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  height: 800px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: black;
  top: ${props => props.top};
`;

export const TitleDiv = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: 30%;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  position: absolute;
  color: white;
  font-size: 70px;
  top: ${props => props.top};
`;

export const OrderBtn = styled.div`
  position: relative;
  width: 160px;
  border: 1px solid #36465E;
  border-radius: 25px;
  text-align: center;
  padding: 20px;
  background-color: #36465E;
  color: white;
  top: 50px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    background-color: #273344;
  }
`;