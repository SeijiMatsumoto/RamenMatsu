import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  margin: 0;
  width: 77%;
  height: 100%; // temporary
  display: flex;
  flex-direction: column;
  background-color: green;
`;

export const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

export const UL = styled.ul`
  position: relative;
  display: inline-flex;
  color: white;
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
  color: white;
  &:hover {
    color: white;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid white;
`;

export const Title = styled.div`
  font-size: 30px;
  color: white;
`;

export const RamenDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
`;

export const SetsDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
  padding-top: 20px;
  border-top: 1px solid black;
`;

export const BeveragesDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
  padding-top: 20px;
  border-top: 1px solid black;
`;