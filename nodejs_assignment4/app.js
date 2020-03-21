const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index',
  {
    pageTitle: 'Inser User',
    path: '/'
  });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'User Directory',
    path: '/users',
    users: users
  });
});

app.post('/users', (req, res, next) => {
  if(req.body.username.length > 0) {
    users.push({ username: req.body.username , id: users.length}); 
  }
  res.redirect('/');
});

// 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
