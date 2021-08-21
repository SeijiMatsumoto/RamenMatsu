import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  position: absolute;
  text-align: center;
  font-size: 30px;
  top: 50px;
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
  width: 350px;
  height: 400px;
  /* border: 2px solid green; */
  border-radius: 10px;
  margin: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  transition: 0.2s ease-in;
  height: 250px;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemText = styled.div`
  margin: 10px;
  position: relative;
`;

export const Price = styled.div`
  margin: 10px;
`;
