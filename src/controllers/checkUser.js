
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
require('env2')('./config.env');

const secret = process.env.SECRET;


module.exports = (req, res, next) => {
  const cookies = req.cookies ? (req.cookies) : {};
  if (cookies.user) {
    jwt.verify(cookies.user, secret, (err, decoded) => {
      if (err) {
        res.render('error');
        next();
      }

      console.log('f', decoded);

      req.userName = decoded.userName;
      req.userId = decoded.userId;
      req.loggedIn = true;
    });
  }
  next();
};
