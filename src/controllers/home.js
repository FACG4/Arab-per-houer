
const selectAllProject = require('./../database/queries/selectAllproject');


exports.get = (req, res) => {
  selectAllProject((err,result)=>{
  if(err) console.log(err);
  else {
    res.render('home', { result: result.rows });
  }
})
};



exports.post = (req, res)=> {
  const name = req.body.name;
  const pass = req.body.pass;

  getUser(name , (err, data) => {

    if (data.length === 0) {
      res.send('invalid username');
    } else {
      bcrypt.compare(pass, data[0].password, (err, response) => {
        if(err){

        }
        if (!response) {
          res.send('invalid password or user name');
        } else {
          const userDetails = { userId: data[0].id,userName:data[0].user_name };
          const cookie = sign(userDetails, SECRET);
          res.setHeader('Set-Cookie', `jwt=${cookie}; HttpOnly`);
          res.send('congratulation u being one of our family');
        }
      });
    }
  });
};
