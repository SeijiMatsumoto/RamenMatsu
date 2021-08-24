import React, { useEffect, useState } from 'react';
import { OrderContainer } from './Styles/Order.style.js';
import Top from './Top.jsx';
import Bottom from './Bottom.jsx';
import axios from 'axios';

const Order = () => {
  var [ramenData, setRamenData] = useState();
  var [setsData, setSetsData] = useState();
  var [drinksData, setDrinksData] = useState();
  var [specialsData, setSpecialsData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get('/ramen')
      .then(res => {
        setRamenData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/sets')
      .then(res => {
        setSetsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/drinks')
      .then(res => {
        setDrinksData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/specials')
      .then(res => {
        setSpecialsData(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const transformData = () => {

  }

  useEffect(() => {
    if (ramenData) {
      console.log(ramenData);
    }
  }, [ramenData])

  return (
    <OrderContainer>
      <Top></Top>
      <Bottom ramen={ramenData} sets={setsData} drinks={drinksData} specials={specialsData}></Bottom>
    </OrderContainer>
  );
};

export default Order;