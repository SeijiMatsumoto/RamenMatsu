import styled from 'styled-components';

export const NavCartContainer = styled.div`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 10; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: white; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px; /* Place content 60px from the top */
  transition: 0.3s; /* 0.5 second transition effect to slide in the sidenav */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Top = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  border-bottom: 1px solid black;
`;

// export const Title = styled.div`
//   position: absolute;
//   top: -40px;
//   left: 25px;
//   font-size: 15px;
// `;

export const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 35px;
  font-size: 30px;
  cursor: pointer;
  color: black;
  z-index: 11;
`;

export const CartDiv = styled.div`
  position: relative;
  width: 100%;
  height: 98%;
  margin: 10px;
`;