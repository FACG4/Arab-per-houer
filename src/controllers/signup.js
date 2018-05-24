const bcrypt = require('bcrypt');
const  signupInsert = require('./../database/queries/insert_user');

exports.get = (req, res) => {
  res.render('signup',{js:'index'})
}
exports.post = (req, res) => {

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;
  const type = req.body.typ;
  
  bcrypt.hash(password, 10, (err, hash) => {


    if (err) throw new Error(err, 'hashing password signup');
    else {
      signupInsert(username, hash, email, firstName, lastName, type,(error, result) => {
        res.redirect('/');
      })
    }
    })
  }
