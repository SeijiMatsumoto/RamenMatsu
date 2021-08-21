import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 50px 50px;
  background-color: #EFF2F5;
  display: flex;
  flex-direction: ${props => props.dir};
  align-items: flex-start;
  justify-content: space-evenly;
  bottom: 0;
`;

export const Group = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  margin: 10px;
  width: 182px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 7px;
`;