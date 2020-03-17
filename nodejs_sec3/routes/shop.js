const fs = require('fs');

const express = require('express');

const index = (req, res, next) => {
    res.write('<html>');
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>Welcome to here</h1></body>'
    );
    res.write('<a href="/shop/users">list users</a><br/>')
    res.write('<a href="/admin/create_user">create user</a>')
    res.write('</html>');
    return res.end();    
}

const users = (req, res, next) => {
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>Welcome to here</h1></body>'
    );
    const chunks = [];
    return fs.readFile('users.txt', (err, data) => {
      if (err) {
        if (err.code == 'ENOENT') {
          res.write('<h1> No Users Yet</h1>');
          res.write('<a href="/create_user">create user</a>');
          res.write('</html>');
          return res.end();
        }
        return console.log(err);
      }
      chunks.push(data);
      const text = Buffer.concat(chunks).toString();
      const users = text.split(';');
      for(i in users){
        if (users[i].length > 1) {
          res.write('<ul><li>' + users[i] + '</li></ul>');
        }
      }
      res.write('<a href="/admin/create_user">create user</a>');
      res.write('</html>');
    });
}

const router = express.Router();
router.get('/users', users);
router.get('/', index);

module.exports = router;
