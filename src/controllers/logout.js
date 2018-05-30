const cookie = require('cookie');

exports.get = (req, res) => {
  const token = cookie.parse(req.headers.cookie).token;
  if (!req.headers.cookie || !req.headers.cookie.includes('user')) {
    res.send('Your are already logged out!');
  } else {
    res.clearCookie('user');
    res.redirect('/');
  }
};
