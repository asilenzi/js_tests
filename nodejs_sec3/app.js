const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const pages = require('./pages')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.post('/create_user', pages.create_user_post);
app.get('/create_user', pages.create_user);
app.get('/users', pages.users);
app.get('/', pages.index);
app.use('/', pages.pageNotFound);

app.listen(3000);
