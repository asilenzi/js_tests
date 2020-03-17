const fs = require('fs');

const index = (req, res, next) => {
    res.write('<html>');
    res.write('<head><title>Welcome to here</title></head>');
    res.write(
      '<body><h1>Welcome to here</h1></body>'
    );
    res.write('<a href="/users">list users</a><br/>')
    res.write('<a href="/create_user">create user</a>')
    res.write('</html>');
    return res.end();    
}

const pageNotFound = (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page not found</title><head>');
    res.write('<body><h1>404</h1></body>');
    res.write('</html>');
    return res.end();
}

const create_user = (req, res, next) => {
  const method = req.method;
  if (method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // here I should be doing input sanitation
      fs.writeFile(
        'users.txt',
        message + ';',
        {flag: 'a'},
        err => {
          if (err) throw err;
          res.statusCode = 302;
          res.setHeader('Location', '/create_user');
          return res.end();
        }
      );
    });
  }
  if (method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Enter User</title></head>');
    res.write(
      '<body><form action="/create_user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('<a href="/users">list users</a><br/>');
    res.write('<a href="/create_user">create user</a>');
    res.write('</html>');
    return res.end();
  }
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
        console.log(users[i]);
        if (users[i].length > 1) {
          res.write('<ul><li>' + users[i] + '</li></ul>');
        }
      }
      res.write('<a href="/create_user">create user</a>');
      res.write('</html>');
    });
}



module.exports.users = users;
module.exports.index = index;
module.exports.pageNotFound = pageNotFound;
module.exports.create_user = create_user;
