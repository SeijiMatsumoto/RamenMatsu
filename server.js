const express = require('express');
const { getRamen, getSets, getDrinks, getSpecials } = require('./api.js');
const app = express();
const port = 3002;
const path = require('path');
var url = '/public/index.html';
var cors = require('cors');
app.use(cors());

app.use(express.static('public'));
app.use(express.json());

app.get('/ramen', (req, res) => {
  getRamen((menu) => {
    res.send(menu);
  })
});

app.get('/sets', (req, res) => {
  getSets((menu) => {
    res.send(menu);
  })
});

app.get('/drinks', (req, res) => {
  getDrinks((menu) => {
    res.send(menu);
  })
});

app.get('/specials', (req, res) => {
  getSpecials((menu) => {
    res.send(menu);
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
})

app.get('/order', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
})

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
})

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

