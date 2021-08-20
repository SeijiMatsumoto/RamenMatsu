const express = require('express');
const app = express();
const port = 3002;
const path = require('path');
var url = '/public/index.html'

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
});

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});