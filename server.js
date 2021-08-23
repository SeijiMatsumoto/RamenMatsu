const express = require('express');
const app = express();
const port = 3002;
const path = require('path');
var url = '/public/index.html'
const { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require('graphql');


app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
});

app.get('/order', (req, res) => {
  res.sendFile(path.join(process.cwd(), url));
});

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});