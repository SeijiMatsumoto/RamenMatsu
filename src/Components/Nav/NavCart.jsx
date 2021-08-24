import React, { useState, useEffect } from 'react';
import { NavCartContainer, CloseBtn, CartDiv } from './Styles/NavCart.style.js';
import {
  CartContainer, Title,
  CartItem, Image, Column, Column2, ItemName, Quantity, Price, Remove,
  TotalDiv, Row, TotalLeft, TotalRight, TipContainer, Percentages, Input, Custom, CustomTip, ButtonDiv, CompleteButton, BottomDiv, NoItems
} from '../03 Order/Styles/Cart.style.js';
import { Link } from 'react-router-dom';

const NavCart = (props) => {

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
    setTotal(0);
    data.forEach(item => {
      setTotal(prevValue => prevValue += item.price * item.quantity);
    })
  }, [data])

  useEffect(() => {
    var tax = subTotal * 0.07;
    setTaxes(tax.toFixed(2));
  }, [subTotal])

  useEffect(() => {
    if (selectedTip === 'tip1s') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip2s').classList.remove('selectedTip');
      document.getElementById('tip3').classList.remove('selectedTip');
      document.getElementById('noTips').classList.remove('selectedTip');
      document.getElementById('customs').classList.remove('selectedTip');
      document.getElementById('customButtons').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip2s') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1s').classList.remove('selectedTip');
      document.getElementById('tip3s').classList.remove('selectedTip');
      document.getElementById('noTips').classList.remove('selectedTip');
      document.getElementById('customs').classList.remove('selectedTip');
      document.getElementById('customButtons').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'tip3s') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1s').classList.remove('selectedTip');
      document.getElementById('tip2s').classList.remove('selectedTip');
      document.getElementById('noTips').classList.remove('selectedTip');
      document.getElementById('customs').classList.remove('selectedTip');
      document.getElementById('customButtons').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'noTips') {
      document.getElementById(selectedTip).classList.add('selectedTip');
      document.getElementById('tip1s').classList.remove('selectedTip');
      document.getElementById('tip2s').classList.remove('selectedTip');
      document.getElementById('tip3s').classList.remove('selectedTip');
      document.getElementById('customs').classList.remove('selectedTip');
      document.getElementById('customButtons').classList.remove('selectedTip');
      var total = subTotal * 0;
      setTip(total.toFixed(2));
    } else if (selectedTip === 'customs') {
      document.getElementById('customButtons').classList.add('selectedTip');
      document.getElementById('tip1s').classList.remove('selectedTip');
      document.getElementById('tip2s').classList.remove('selectedTip');
      document.getElementById('tip3s').classList.remove('selectedTip');
      document.getElementById('noTips').classList.remove('selectedTip');
      var total = subTotal * tipValue;
      setTip(total.toFixed(2));
    }
  }, [tipValue])

  const selectTip = (e) => {
    var tip = e.target.innerHTML;
    if (tip === '10%') {
      setSelectedTip('tip1s');
      setTipValue(.1);
    } else if (tip === '15%') {
      setSelectedTip('tip2s');
      setTipValue(.15);
    } else if (tip === '20%') {
      setSelectedTip('tip3s');
      setTipValue(.20);
    } else if (tip === 'Not now') {
      setSelectedTip('noTips');
      setTipValue(0);
    }
  }

  const selectCustom = () => {
    setSelectedTip('customs');
    setTipValue(null);
    document.getElementById('customs').focus();
  }

  const customTip = (e) => {
    if (parseInt(e.target.value)) {
      setTipValue(parseInt(e.target.value) / 100)
      setSelectedTip('customs');
    } else {
      setTipValue(0);
      setSelectedTip('customs');
    }
  }

  const closeNav = () => {
    props.setShowCart(false);
  }

  const changeQuantity = (e) => {

  }

  return (
    <NavCartContainer id='sideCart' className='sidenav' width={props.width}>
      <CloseBtn className="closebtn" onClick={closeNav}>X</CloseBtn>
      <CartDiv>
        <CartContainer width={'95%'} shadow={'none'} height={'100%'}>
          <Title>Cart</Title>
          {!data.length ? <NoItems>No items in cart</NoItems> : null}
          {data.map((item, i) => {
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
          })}
          <BottomDiv>
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
                  <Input id='tip1s' onClick={(e) => selectTip(e)}>10%</Input>
                  <Input id='tip2s' onClick={(e) => selectTip(e)}>15%</Input>
                  <Input id='tip3s' onClick={(e) => selectTip(e)}>20%</Input>
                  <Input id='noTips' onClick={(e) => selectTip(e)}>Not now</Input>
                </Percentages>
                <Custom>
                  <Input id='customButtons' onClick={selectCustom}>Custom</Input>
                  <CustomTip type='text' id='customs' onChange={(e) => customTip(e)} placeholder='Enter custom percentage'></CustomTip>
                </Custom>
              </TipContainer>
            </TotalDiv>
            <ButtonDiv>
              <CompleteButton>
                <Link id='linkWhite' to='/checkout'>Checkout</Link>
              </CompleteButton>
            </ButtonDiv>
          </BottomDiv>
        </CartContainer>
      </CartDiv>
    </NavCartContainer>
  );
};

export default NavCart;