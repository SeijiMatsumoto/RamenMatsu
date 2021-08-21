import styled from 'styled-components';

export const LocHoursContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -50px;
`;

export const LocHoursDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
`;

export const MapDiv = styled.div`
  position: relative;
  width: ${props => props.width};
  padding: 20px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  position: absolute;
  text-align: center;
  font-size: 30px;
  top: 50px;
  font-weight: bold;
`;

export const TextDiv = styled.div`
  position: relative;
  width: ${props => props.width};
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LocationDiv = styled.div`
  position: relative;
  width: 250px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const HoursDiv = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  position: relative;
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Address = styled.div`
  font-size: ${props => props.font};
`;

export const Hours = styled.div`
  font-size: ${props => props.font};
`;