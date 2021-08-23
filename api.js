import { Client, Environment } from 'square';
require('dotenv').config();

const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})