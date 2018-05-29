const getUser = require('./../database/queries/get_login');
const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = process.env.SECRET;

exports.get = (req, res) => {
  res.render('login', { style: 'css/style.css' });
};

exports.post = (req, res) => {
  const { name } = req.body;
  const { pass } = req.body;
  console.log(name);

  getUser(name, (err, data) => {
    if (data.length === 0) {
      res.send('invalid username');
    } else {
      bcrypt.compare(pass, data[0].password, (error, response) => {
        if (err) {
          console.log('error');
        }
        if (!response) {
          res.send('invalid password or user name');
        } else {
          const userDetails = { userId: data[0].id, userName: data[0].user_name };
          const token = sign(userDetails, secret);
          res.cookie('user', token, { maxAge: 900000, httpOnly: true });
          res.send('success');
        }
      });
    }
  });
};
