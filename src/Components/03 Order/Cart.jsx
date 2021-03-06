import React, { useState, useEffect } from 'react';
import {
  CartContainer, Title, NoItems,
  CartItem, Image, Column, Column2, ItemName, Quantity, Price, Remove,
  TotalDiv, Row, TotalLeft, TotalRight, TipContainer, Percentages, Input, Custom, CustomTip, CompleteButton
} from './Styles/Cart.style.js';
import { Link } from 'react-router-dom';

const Cart = (props) => {

  var [tip, setTip] = useState(null);
  var [tipValue, setTipValue] = useState('');
  var [selectedTip, setSelectedTip] = useState(null);
  var [data, setData] = useState([]);
  var [subTotal, setTotal] = useState(0);
  var [taxes, setTaxes] = useState(0);

  useEffect(() => {
    if (props.data.length) {
      setData(props.data)
    } else {
      setData([]);
    }
  }, [props.data])

  useEffect(() => {
    updateData();
  }, [data])

  const updateData = () => {
    setTotal(0);
    data.forEach(item => {
      setTotal(prevValue => prevValue += item.price * item.quantity);
    })
  }

  useEffect(() => {
    var tax = subTotal * 0.07;
    setTaxes(tax.toFixed(2));
  }, [subTotal])

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

  const selectTip = (e) => {
    e.preventDefault();
    var tip = e.target.innerHTML;
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

  const changeQuantity = (e, i) => {
    var q = parseInt(e.target.value);
    console.log(q);
    var temp = data;
    temp[i].quantity = q;
    console.log(temp);
    props.setData(temp);
    updateData();
  }

  return (
    <CartContainer>
      <Title>Cart</Title>
      {!data.length ? <NoItems>No items in cart</NoItems> : null}
      { data.map((item, i) => {
        return (
          <CartItem key={item.name + i.toString() + item.quantity}>
            <Image src={item.image}></Image>
            <Column>
              <ItemName>{item.name}</ItemName>
              <Quantity defaultValue={item.quantity} onChange={(e) => changeQuantity(e, i)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Quantity>
            </Column>
            <Column2>
              <Price>${(item.price * item.quantity).toFixed(2)}</Price>
              <Remove onClick={() => props.removeFromCart(i)}>Remove</Remove>
            </Column2>
          </CartItem>
        )
      }) }
      <TotalDiv>
        <Row>
          <TotalLeft>Subtotal</TotalLeft>
          <TotalRight>${subTotal.toFixed(2)}</TotalRight>
        </Row>
        <Row>
          <TotalLeft>Taxes</TotalLeft>
          <TotalRight>${taxes}</TotalRight>
        </Row>
        <Row>
          <TotalLeft>Tip</TotalLeft>
          {tip ? <TotalRight>${tip}</TotalRight> : <TotalRight>$0.00</TotalRight>}
        </Row>
        <Row>
          <TotalLeft>Total</TotalLeft>
          {tip ? <TotalRight>${(parseInt(tip) + parseInt(taxes) + parseInt(subTotal)).toFixed(2)}</TotalRight> : <TotalRight>${(parseInt(taxes) + parseInt(subTotal)).toFixed(2)}</TotalRight>}
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
        <Link id='linkWhite' to='/checkout'>Checkout</Link>
      </CompleteButton>
    </CartContainer >
  );
}

export default Cart;