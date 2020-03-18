const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const admin = require('./routes/admin')
const shop = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', admin);
app.use('/shop', shop);

app.use('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'));
});
app.get('/', (req, res, next) => {res.redirect('/shop');});

// 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
