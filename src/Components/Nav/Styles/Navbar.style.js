import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: ${props => props.height};
  top: 0;
  background-color: #EFF2F5;
  display: flex;
  align-self: center;
  justify-content: center;
  position: fixed;
  flex-direction: row;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
    text-decoration: underline;
  }

  &:nth-child(3) {
    border: 1px solid black;
    border-radius: 25px;
    height: 40px;
    width: 120px;
    top: 0px;
  }
`;

export const CartButton = styled.i`
  height: 100%;
  position: relative;
  margin-left: 15px;
  top: ${props => props.top};
  cursor: pointer;
  color: black;

  &:hover {
    color: #c1c1c1;
  }
`;

export const MenuButton = styled.i`
  position: relative;
  margin-left: 20px;
  top: 0;
  cursor: pointer;
  color: black;
  z-index: 6;
  &:hover {
    color: #c1c1c1;
  }
`;