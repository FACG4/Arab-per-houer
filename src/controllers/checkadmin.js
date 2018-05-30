
module.exports = (req, res, next) => {
  console.log('c', req.role);
  if (req.role === 3) {
    res.redirect('/admin');
    next();
  } else {
    res.send('that is not page please go to home just');
  }
};
