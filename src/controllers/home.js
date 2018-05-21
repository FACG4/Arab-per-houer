exports.get = (req, res) => {
  res.render('home');
};
exports.post = (req, res)=> {
  console.log("dd",req.body);

  res.send('success')

};