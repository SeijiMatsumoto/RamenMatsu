import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: ${props => props.height};
  top: 0;
  background-color: #EFF2F5;
  display: flex;
  align-self: center;
  justify-content: center;
  position: relative;
`;

export const NavLinks = styled.div`
  position: relative;
  top: ${props => props.top};
  width: ${props => props.width};
  text-align: center;
  display: flex;
  align-self: center;
  justify-content: flex-end;
`;

export const NavUL = styled.ul`
`;

export const NavLi = styled.li`
  display: inline-block;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  color: black;
  transition: 0.2s ease-in;

  &:hover {
    color: #36465E;
  }
`;

export const Cart = styled.i`
  height: 100%;
  position: relative;
  margin-left: 10px;
  top: ${props => props.top};
  cursor: pointer;
  color: black;

  &:hover {
    color: #c1c1c1;
  }
`;

export const Menu = styled.i`
  position: relative;
  margin-left: 25px;
  top: ${props => props.top};
  cursor: pointer;
  color: black;

  &:hover {
    color: #c1c1c1;
  }
`;