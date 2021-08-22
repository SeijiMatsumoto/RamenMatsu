import React, { useState, useEffect } from 'react';
import {
  CartContainer, Title,
  CartItem, Image, Column, Column2, ItemName, Quantity, Price, Remove,
  TotalDiv, Row, TotalLeft, TotalRight, TipContainer, Percentages, Input, Custom
} from './Styles/Cart.style';
import { cartItems } from '../../../data/cartData.js';

const Cart = () => {

  var subTotal = 0;
  cartItems.forEach(item => {
    subTotal += item.price;
  })
  var taxes = subTotal * 0.07;
  taxes = taxes.toFixed(2);

  var [tip, setTip] = useState(0.00);
  var [selectedTip, setSelectedTip] = useState(null);

  useEffect(() => {
    if (selectedTip === 'tip1') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      var total = subTotal * .10;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip2') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      var total = subTotal * .15;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip3') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      var total = subTotal * .20;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'noTip') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      var total = subTotal * 0;
      setTip(total);
    }

  }, [selectedTip])

  const removeItem = () => {
    console.log('Item removed!');
  }

  const selectTip = (e) => {
    var tip = e.target.innerHTML;
    if (tip === '10%') {
      setSelectedTip('tip1');
    } else if (tip === '15%') {
      setSelectedTip('tip2');
    } else if (tip === '20%') {
      setSelectedTip('tip3');
    } else if (tip === 'Not now') {
      setSelectedTip('noTip');
    }
  }

  return (
    <CartContainer>
      <Title>Cart</Title>
      {cartItems.map(item => {
        return (
          <CartItem>
            <Image src={item.image}></Image>
            <Column>
              <ItemName>{item.name}</ItemName>
              <Quantity value={item.quantity}></Quantity>
            </Column>
            <Column2>
              <Price>${item.price}</Price>
              <Remove onClick={removeItem}>Remove</Remove>
            </Column2>
          </CartItem>
        )
      })}
      <TotalDiv>
        <Row>
          <TotalLeft>Subtotal</TotalLeft>
          <TotalRight>${subTotal}</TotalRight>
        </Row>
        <Row>
          <TotalLeft>Taxes</TotalLeft>
          <TotalRight>${taxes}</TotalRight>
        </Row>
        <Row>
          <TotalLeft>Tip</TotalLeft>
          <TotalRight>${tip}</TotalRight>
        </Row>
        <TipContainer>
          <Percentages>
            <Input id='tip1' onClick={(e) => selectTip(e)}>10%</Input>
            <Input id='tip2' onClick={(e) => selectTip(e)}>15%</Input>
            <Input id='tip3' onClick={(e) => selectTip(e)}>20%</Input>
            <Input id='noTip' onClick={(e) => selectTip(e)}>Not now</Input>
          </Percentages>
          <Custom></Custom>
        </TipContainer>
      </TotalDiv>
    </CartContainer>
  );
};

export default Cart;