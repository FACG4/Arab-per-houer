const bcrypt = require('bcrypt');
const signupInsert = require('./../database/queries/insert_user');

exports.get = (req, res) => {
  res.render('signup', { style: { style1: 'css/style.css' } });
};
exports.post = (req, res) => {
  const {
    firstName, lastName, username, email, password, type, position,
  } = req.body;


  bcrypt.hash(password, 10, (err, hash) => {
    console.log('f', hash);

    if (err) throw new Error(err, 'hashing password signup');
    else {
      signupInsert(username, hash, email, firstName, lastName, type, position, (error, result) => {
        res.redirect('/login');
      });
    }
  });
};

