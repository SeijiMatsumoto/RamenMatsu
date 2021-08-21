import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  margin: 0;
  width: 80%;
  height: 100%; // temporary
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  background-color: green;
`;


export const Nav = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

export const UL = styled.ul`
  display: inline-flex;
  color: white;
`;

export const LI = styled.li`
  list-style: none;
  margin-right: 40px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;