const fs = require('fs');
const path = require('path');

const express = require('express');

const root_dir = require(path.join('..', 'utils', 'root'));
const file = require(path.join(root_dir, 'utils', 'file'));

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
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
}

const add_product_post = (req, res, next) => {
  fs.writeFile(
    'products.txt',
    req.body.product + ';',
    {flag: 'a'},
    err => {
      if (err) throw err;
      res.statusCode = 302;
      res.setHeader('Location', '/admin/add-product');
      return res.end();
    }
  );
}

const add_product = (req, res, next) => {
  res.write('<html>');
  res.write('<head><title>Enter Product</title></head>');
  res.write(
    '<body><form action="/admin/add-product" method="POST"><input type="text" name="product"><button type="submit">Send</button></form></body>'
  );
  return file.list('products.txt', res);
}

const router = express.Router();
router.post('/create_user', create_user_post);
router.get('/create_user', create_user);
router.post('/add-product', add_product_post);
router.get('/add-product', add_product);

module.exports = router;
