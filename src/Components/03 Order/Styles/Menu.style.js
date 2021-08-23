import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  margin: 0;
  width: 1100px;
  /* height: 100%; // temporary */
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const UL = styled.ul`
  position: relative;
  display: inline-flex;
  color: black;
  top: 5px;
`;

export const LI = styled.li`
  list-style: none;
  margin-right: 40px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const A = styled.a`
  color: black;
  &:hover {
    color: black;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid white;
  margin-top: -20px;
`;

export const Title = styled.div`
  font-size: 30px;
  color: black;
  margin-top: 20px;
`;

export const RamenDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 2px solid #d3d3d3;
  padding-bottom: 30px;
  justify-content: ${props => props.justify};
`;

export const SetsDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 20px;
  border-bottom: 2px solid #d3d3d3;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 30px;
  justify-content: ${props => props.justify};
`;

export const BeveragesDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 30px;
  justify-content: ${props => props.justify};
`;