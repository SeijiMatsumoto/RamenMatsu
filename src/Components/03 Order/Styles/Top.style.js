import styled from 'styled-components';

export const TopContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  background-color: #36465E;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;
  font-size: ${props => props.font};
  color: white;
`;