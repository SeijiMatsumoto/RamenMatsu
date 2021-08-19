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
  flex-direction: row;
`;

export const Logo = styled.img`
  width: 180px;
  object-fit: contain;
`;

export const SmallLogo = styled.img`
  width: 90px;
  object-fit: contain;
`;

export const NavLinks = styled.div`
  position: relative;
  top: ${props => props.top};
  width: ${props => props.width};
  text-align: center;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  margin-right: 15px;
`;


export const NavUL = styled.ul`
  display: inline-flex;
  flex-wrap: nowrap;
  position: relative;
  top: 0;
`;

export const NavLi = styled.li`
  position: relative;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 15px;
  cursor: pointer;
  color: black;
  transition: 0.2s ease-in;

  &:hover {
    color: #36465E;
  }

  &:nth-child(3) {
    border: 1.5px solid black;
    border-radius: 25px;
    height: 40px;
    width: 120px;
    top: 0px;
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
  margin-left: 20px;
  top: ${props => props.top};
  cursor: pointer;
  color: black;

  &:hover {
    color: #c1c1c1;
  }
`;