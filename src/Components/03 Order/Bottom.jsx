import React, { useState, useEffect } from 'react';
import { BottomContainer } from './Styles/Bottom.style.js';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';
const Bottom = () => {
  var [showCart, setShowCart] = useState(true);
  var [bottomWidth, setBottomWidth] = useState('80%');
  var [data, setData] = useState([]);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [])

  const addToCart = (item) => {
    item.i = data.length;
    setData(prevData => [...prevData, item]);
  }

  const removeFromCart = (index) => {
    console.log('Filtered:', data.filter(item => item.i !== index));
    setData(data.filter(item => item.i !== index));
  }

  useEffect(() => {
    data.forEach((item, j) => item.i = j);
    console.log('Data changed:', data);
  }, [data])

  const resize = () => {
    var width = window.innerWidth;

    if (width <= 1000) {
      setShowCart(false);
      setBottomWidth('90%')
    } else {
      setBottomWidth('80%');
      setShowCart(true);
    }
  }

  return (
    <BottomContainer width={bottomWidth}>
      <Menu addToCart={addToCart}></Menu>
      {showCart ? <Cart data={data} setData={setData} removeFromCart={removeFromCart}></Cart> : null}
    </BottomContainer>
  );
};

export default Bottom;