import styled from 'styled-components';

export const HowItsMadeContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #556475;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  position: absolute;
  font-size: 30px;
  top: 50px;
  color: white;
`;

export const Description = styled.div`
  position: absolute;
  top: 110px;
  font-size: ${props => props.font};
  color: white;
  width: 70%;
  text-align: center;
`;

export const CardsDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 100px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  flex-direction: row;
  transition: 0.3s ease-in;
  flex-shrink: 0;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 1;
`;

export const Image = styled.img`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: 0.5s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemTitle = styled.p`
  position: absolute;
  text-align: right;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 40px;
  color: white;
  margin-right: 10px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 4px;
`;

export const TextDiv = styled.div`
  width: 30%;
  position: relative;
  padding: 10px;
  background-color: white;
  display: flex;
`;

export const Text = styled.div`
  color: black;
  font-size: ${props => props.font};
`;