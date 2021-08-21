import React from 'react';
import { OrderContainer } from './Styles/Order.style.js';
import Top from './Top.jsx';
import Bottom from './Bottom.jsx';

const Order = () => {
  return (
    <OrderContainer>
      <Top></Top>
      <Bottom></Bottom>
    </OrderContainer>
  );
};

export default Order;