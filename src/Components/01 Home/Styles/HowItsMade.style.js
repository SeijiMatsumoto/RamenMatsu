import styled from 'styled-components';

export const HowItsMadeContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #36465E;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: ${props => props.bottom};
`;

export const Title = styled.div`
  position: relative;
  font-size: 30px;
  top: 50px;
  color: white;
  font-weight: bold;
  margin: 10px;
`;

export const Description = styled.div`
  position: relative;
  top: 50px;
  font-size: ${props => props.font};
  color: white;
  width: 60%;
  text-align: center;
`;

export const CardsDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 100px;
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 600px;
  height: 350px;
  margin: 40px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  transition: 0.3s ease-in;
  flex-shrink: 0;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  margin: 0px 10px 0px 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 4px;
`;

export const TextDiv = styled.div`
  width: 30%;
  position: relative;
  padding: 20px;
  background-color: white;
  display: flex;
`;

export const Text = styled.div`
  color: black;
  font-size: 16px;
`;

//------------------------Mobile-----------------------//

export const CardsDivMobile = styled.div`
  position: relative;
  width: 90vw;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 1;
`;

export const CardContainerMobile = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-direction: column;
  transition: 0.3s ease-in;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

export const ImageDivMobile = styled.div`
  position: relative;
  height: 70%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 1;
`;

export const ImageMobile = styled.img`
  position: relative;
  overflow: hidden;
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: 0.5s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemTitleMobile = styled.p`
  position: absolute;
  text-align: right;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 40px;
  color: white;
  margin: 0px 10px 0px 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 4px;
`;

export const TextDivMobile = styled.div`
  height: 30%;
  position: relative;
  padding: 15px;
  background-color: white;
  display: flex;
`;

export const TextMobile = styled.div`
  color: black;
  font-size: 16px;
`;
