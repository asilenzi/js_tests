const pages = require('./pages')

const requestHandler = (req, res) => {
  const url = req.url;
  if (url === '/') {
    return pages.index(req, res);
  }
  if (url === '/create_user') {
    return pages.create_user(req, res);
  }
  if (url === '/users') {
    return pages.users(req, res);
  }
  return pages.pageNotFound(req, res);
};


module.exports.handler = requestHandler;
