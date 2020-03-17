const fs = require('fs');

const express = require('express');

const create_user_post = (req, res, next) => {
  fs.writeFile(
    'users.txt',
    req.body.message + ';',
    {flag: 'a'},
    err => {
      if (err) throw err;
      res.statusCode = 302;
      res.setHeader('Location', '/admin/create_user');
      return res.end();
    }
  );
}

const create_user = (req, res, next) => {
  res.write('<html>');
  res.write('<head><title>Enter User</title></head>');
  res.write(
    '<body><form action="/admin/create_user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
  res.write('<a href="/shop/users">list users</a><br/>');
  res.write('<a href="/admin/create_user">create user</a>');
  res.write('</html>');
  return res.end();
}

const router = express.Router();
router.post('/create_user', create_user_post);
router.get('/create_user', create_user);

module.exports = router;
