import React, { useEffect, useState } from 'react';
import { OrderContainer } from './Styles/Order.style.js';
import Top from './Top.jsx';
import Bottom from './Bottom.jsx';
import axios from 'axios';
import { allItems } from '../../../data/menuData.js';

const Order = (props) => {
  var [ramenData, setRamenData] = useState();
  var [setsData, setSetsData] = useState();
  var [drinksData, setDrinksData] = useState();
  var [specialsData, setSpecialsData] = useState();
  var [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      getData();
      setLoaded(true);
    }
  }, [])

  const getData = () => {
    axios.get('/ramen')
      .then(res => {
        // setRamenData(res.data);
        setRamenData(transformData(res.data));
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/sets')
      .then(res => {
        // setSetsData(res.data);
        setSetsData(transformData(res.data));
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/drinks')
      .then(res => {
        // setDrinksData(res.data);
        setDrinksData(transformData(res.data));
      })
      .catch(err => {
        console.log(err);
      })
    axios.get('/specials')
      .then(res => {
        // setSpecialsData(res.data);
        setSpecialsData(transformData(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }

  const transformData = (obj) => {
    var newData = [];

    obj.items.forEach((item, i) => {
      var imageExists = false;
      var eachItem = {
        name: '',
        description: '',
        price: 0,
        image: ''
      };

      eachItem.name = item.itemData.name;
      eachItem.description = item.itemData.description;
      eachItem.price = item.itemData.variations[0].itemVariationData.priceMoney.amount;
      eachItem.price = parseInt(eachItem.price) * .01;
      for (var j = 0; j < allItems.length; j++) {
        if (eachItem.name === allItems[j].name) {
          eachItem.image = allItems[j].image;
          eachItem.description = allItems[j].description;
          imageExists = true;
          break;
        }
      }

      if (!imageExists) {
        // console.log(eachItem.name, 'does not have an image.')
        eachItem.image = 'https://i.imgur.com/XX46C0a.png';
      }

      newData.push(eachItem);
    })

    return newData;
  }

  useEffect(() => {
    if (specialsData) {
      // console.log(specialsData);
    }
  }, [specialsData])

  return (
    <OrderContainer>
      <Top></Top>
      <Bottom ramen={ramenData} sets={setsData} drinks={drinksData} specials={specialsData}></Bottom>
    </OrderContainer>
  );
};

export default Order;