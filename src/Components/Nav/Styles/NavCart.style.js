import styled from 'styled-components';

export const NavCartContainer = styled.div`
  height: 100%;
  width: ${props => props.width};
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: -100vh;
  background-color: white;
  overflow-x: hidden;
  padding-top: 10px;
  transition: 0.3s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 43px;
  right: 45px;
  font-size: 20px;
  cursor: pointer;
  color: black;
  z-index: 11;
`;

export const CartDiv = styled.div`
  position: relative;
  width: 100%;
  height: 98%;
  margin: 10px;
  display: flex;
  justify-content: center;
`;