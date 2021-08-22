import styled from 'styled-components';

export const Side = styled.div`
  height: 100%;
  width: 100vw;
  position: fixed;
  z-index: 10;
  top: 0;
  right: -100vw;
  background-color: white;
  overflow: hidden;
  padding-top: 60px;
  transition: 0.3s;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Title = styled.div`
  position: absolute;
  top: -40px;
  left: 25px;
  font-size: 15px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
  font-size: 40px;
  cursor: pointer;
  color: black;
  z-index: 11;
`;

export const NavLinks = styled.div`
  position: relative;
  top: 30%;
  bottom: 70%;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  margin-right: 30px;
`;

export const NavUL = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  top: 0;
`;

export const NavLi = styled.li`
  position: relative;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 60px;
  padding: 15px;
  cursor: pointer;
  color: black;
  transition: 0.2s ease-in;

  &:hover {
    text-decoration: underline;
  }
`;