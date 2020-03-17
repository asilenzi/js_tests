const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const pages = require('./pages')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/create_user', pages.create_user);
app.use('/users', pages.users);
app.use('/', pages.index);

app.listen(3000);
