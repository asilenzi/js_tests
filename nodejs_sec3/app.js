const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin')
const shop = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(admin);
app.use(shop);

// 404
app.use((req, res, next) => {
  res.status(404).send('<html><head><title>Page not found</title><head><body><h1>404</h1></body></html>');
});

app.listen(3000);
