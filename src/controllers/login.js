const getUser = require('./../database/queries/get_login');
const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const error = require('./error');

const secret = process.env.SECRET;

exports.get = (req, res) => {
  res.render('login', { style: { style1: 'css/style.css', loginStyle: 'css/login.css' } });
};

exports.post = (req, res) => {
  const name = req.body.x;
  const pass = req.body.y;


  getUser(name, (erro, data) => {
    if (data.length === 0) {
      res.send('invalid username');
    } else {
      bcrypt.compare(pass, data[0].password, (err, response) => {
        if (err) error.catchError(req, res);
        if (!response) {
          res.send('هناك خطأ في اليوز أو كلمة السر .. حاول مرة أخرى');
        } else {
          const userDetails = { userId: data[0].id, userName: data[0].user_name, role: data[0].type_role };

          const token = sign(userDetails, secret);
          res.cookie('user', token, { maxAge: 900000000000000, httpOnly: true });
          res.send('success');
        }
      });
    }
  });
};
