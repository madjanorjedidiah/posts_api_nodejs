const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const db = require('db_config');


// get routes






//  listen to server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log('listening to current port...'))