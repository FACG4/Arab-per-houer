

// exports.get(req,res)=>{
//   req.render('signup')
// };
// exports.post(req,res)=>{
//   console.log(res.body);
// }
exports.get = (req, res) => {
  res.render('signup')
}
exports.post = (req, res) => {
  console.log(req.body);
  const firstName = req.body.name;
    const lastName = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Email must be a valid email address').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
      req.checkBody('firstName', 'firstName field is required').notEmpty();
        req.checkBody('lastName', 'lastName field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
      res.render('signup', {
        errors: errors
      });
    } else {
      const newUser = new User({
        name: name,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });

      User.signup(newUser, (err, user) => {
        if(err) throw err;
        req.flash('success_msg', 'You are registered and can log in');
        res.redirect('/login');
      });
    }
}
