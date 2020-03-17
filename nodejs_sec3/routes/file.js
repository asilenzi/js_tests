const fs = require('fs');

const footer = (res) => {
  res.write('<a href="/shop/users">list users</a><br/>');
  res.write('<a href="/shop/products">list products</a><br/>');
  res.write('<a href="/admin/create_user">create user</a><br/>');
  res.write('<a href="/admin/add-product">add product</a><br/>');
}

const list = (filename, res) => {
  return fs.readFile(filename, (err, data) => {
    if (err) {
      if (err.code == 'ENOENT') {
        res.write('<h1> No Users Yet</h1>');
        res.write('<a href="/create_user">create user</a>');
        res.write('</html>');
        return res.end();
      }
      return console.log(err);
    }
    const chunks = [];
    chunks.push(data);
    const text = Buffer.concat(chunks).toString();
    const users = text.split(';');
    for(i in users){
      if (users[i].length > 1) {
        res.write('<ul><li>' + users[i] + '</li></ul>');
      }
    }
    footer(res);
    res.write('</html>');
    res.end();
  });
}

module.exports.footer = footer;
module.exports.list = list;