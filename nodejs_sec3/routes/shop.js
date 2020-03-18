const path = require('path');

const express = require('express');

const root_dir = require(path.join('..', 'utils', 'root'));
const file = require(path.join(root_dir, 'utils', 'file'));

const index = (req, res, next) => {
    res.write('<html>');
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>Welcome to here</h1></body>'
    );
    file.footer(res);
    res.write('</html>');
    return res.end();    
}

const users = (req, res, next) => {
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>List of Users</h1></body>'
    );
    return file.list('users.txt', res);
}

const products = (req, res, next) => {
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>List of products</h1></body>'
    );
    return file.list('products.txt', res);
}

const router = express.Router();
router.get('/users', users);
router.get('/products', products);
router.get('/', index);

module.exports = router;
