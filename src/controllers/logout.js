const cookie = require('cookie');
exports.get = (req, res) => {
  var token = cookie.parse(req.headers.cookie).token;
  if(!req.headers.cookie || !req.headers.cookie.includes('user')){
    res.send('Your are already logged out!')
  }
  else {
    res.clearCookie("user");
    res.render('login')
  }
};
