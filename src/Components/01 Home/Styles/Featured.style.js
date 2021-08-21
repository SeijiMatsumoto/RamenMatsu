import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -50px;
`;

export const Title = styled.div`
  position: absolute;
  text-align: center;
  font-size: 30px;
  top: 50px;
  font-weight: bold;
`;

export const FeaturedDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  position: relative;
  top: 20px;
  flex-shrink: 0;
  width: ${props => props.width};
  border-radius: 10px;
  margin: 30px 30px;
  overflow: hidden;
  transform: 0.4s ease-in;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const PicDiv = styled.div`
  position: relative;
  top: 0;
  height: 250px;
  width: 100%;
  overflow: hidden;
`;

export const ItemPic = styled.img`
  object-fit: cover;
  transition: 0.4s ease-in;
  height: 250px;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemText = styled.div`
  margin: 10px;
  position: relative;

  &:nth-child(0) {
    font-weight: bold;
  }
`;

export const ProductName = styled.span`
  font-weight: bold;
`;

export const Price = styled.div`
  margin: 10px;
`;
