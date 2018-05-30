const getUser = require('./../database/queries/get_login');
const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = process.env.SECRET;

exports.get = (req, res) => {
  res.render('login', { style: { style1: 'css/style.css', loginStyle: 'css/login.css' } });
};

exports.post = (req, res) => {
  const name = req.body.x;
  const pass = req.body.y;
  console.log('fffffff', name);

  getUser(name, (err, data) => {
    if (data.length === 0) {
      res.send('invalid username');
    } else {
      bcrypt.compare(pass, data[0].password, (error, response) => {
        if (err) {
          console.log('error');
        }
        if (!response) {
          res.send('هناك خطأ في اليوز أو كلمة السر .. حاول مرة أخرى');
        } else {
          const userDetails = { userId: data[0].id, userName: data[0].user_name };
          const token = sign(userDetails, secret);
          res.cookie('user', token, { maxAge: 900000000000000, httpOnly: true });
          res.send('success');
        }
      });
    }
  });
};
