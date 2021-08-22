import React, { useState, useEffect } from 'react';
import {
  CartContainer, Title,
  CartItem, Image, Column, Column2, ItemName, Quantity, Price, Remove,
  TotalDiv, Row, TotalLeft, TotalRight, TipContainer, Percentages, Input, Custom, CustomTip, CompleteButton
} from './Styles/Cart.style';
import { cartItems } from '../../../data/cartData.js';

const Cart = () => {

  var subTotal = 0;
  cartItems.forEach(item => {
    subTotal += item.price * item.quantity;
  })
  var taxes = subTotal * 0.07;
  taxes = taxes.toFixed(2);

  var [tip, setTip] = useState(null);
  var [tipValue, setTipValue] = useState();
  var [selectedTip, setSelectedTip] = useState(null);

  useEffect(() => {
    if (selectedTip === 'tip1') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      document.getElementById('custom').classList.remove('selectedTip');
      document.getElementById('customButton').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip2') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      document.getElementById('custom').classList.remove('selectedTip');
      document.getElementById('customButton').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip3') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      document.getElementById('custom').classList.remove('selectedTip');
      document.getElementById('customButton').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'noTip') {
      console.log('click2')
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('custom').classList.remove('selectedTip');
      document.getElementById('customButton').classList.remove('selectedTip');
      var total = subTotal * 0;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'custom') {
      document.getElementById('customButton').classList.add('selectedTip');
      document.getElementById('tip1').classList.remove('selectedTip');
      document.getElementById('tip2').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTip').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    }
  }, [tipValue])

  const removeItem = () => {
    console.log('Item removed!');
  }

  const selectTip = (e) => {
    var tip = e.target.innerHTML;
    console.log(' no custom ');
    if (tip === '10%') {
      setSelectedTip('tip1');
      setTipValue(.1);
    } else if (tip === '15%') {
      setSelectedTip('tip2');
      setTipValue(.15);
    } else if (tip === '20%') {
      setSelectedTip('tip3');
      setTipValue(.20);
    } else if (tip === 'Not now') {
      setSelectedTip('noTip');
      setTipValue(0);
      console.log('click1')
    }
  }

  const selectCustom = () => {
    setSelectedTip('custom');
    setTipValue(null);
    document.getElementById('custom').focus();
  }

  const customTip = (e) => {
    if (parseInt(e.target.value)) {
      setTipValue(parseInt(e.target.value) / 100)
      setSelectedTip('custom');
    } else {
      setTipValue(0);
      setSelectedTip('custom');
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
              <Price>${item.price * item.quantity}</Price>
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
          <Custom>
            <Input id='customButton' onClick={selectCustom}>Custom</Input>
            <CustomTip type='text' id='custom' onChange={(e) => customTip(e)} placeholder='Enter custom percentage'></CustomTip>
          </Custom>
        </TipContainer>
      </TotalDiv>
      <CompleteButton>
        Checkout
      </CompleteButton>
    </CartContainer>
  );
};

export default Cart;