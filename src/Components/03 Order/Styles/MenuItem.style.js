import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: ${props => props.margin};
  /* overflow: hidden; */
  flex-direction: row;
  /* align-items: center; */
  transition: 0.15s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

export const TextDiv = styled.div`
  position: relative;
  width: 62.5%;
  height: 100%;
  padding: 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Image = styled.img`
  position: relative;
  width: 37.5%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.div`
  position: relative;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${props => props.font};
`;

export const DescPrice = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

export const Desc = styled.div`
  position: relative;
  display: flex;
  font-size: ${props => props.font};
  width: 100%;
  height: 100%;
`;

export const Price = styled.div`
  position: relative;
  display: flex;
  font-size: 12px;
  width: 100%;
  justify-content: flex-start;
`;

export const QuickAdd = styled.div`
  position: absolute;
  display: flex;
  width: 80px;
  height: 30px;
  bottom: 10px;
  right: 10px;
  border-radius: 25px;
  font-size: 12px;
  background-color: #5E6C7C;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  &:hover{
    background: #2f3d51;
  }
`;