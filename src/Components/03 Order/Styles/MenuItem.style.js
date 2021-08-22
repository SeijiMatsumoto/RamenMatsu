import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  width: 450px;
  height: 175px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 30px;
  /* overflow: hidden; */
  flex-direction: row;
  align-items: center;
  transition: 0.15s ease-in;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const TextDiv = styled.div`
  width: 275px;
  height: 175px;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Image = styled.img`
  width: 175px;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-bottom: -20px;
  width: 100%;
  /* border: 1px solid red; */

`;

export const Desc = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  /* border: 1px solid red; */

`;

export const Price = styled.div`
  display: flex;
  font-size: 12px;
  width: 100%;
  /* border: 1px solid red; */

`;