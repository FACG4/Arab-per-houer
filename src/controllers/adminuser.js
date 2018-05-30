const adminUser = require('./../database/queries/adminUser');
const error = require('./error');


exports.get = (req, res) => {
  adminUser.selectUser((err, result) => {
    if (err) error.catchError(req, res);
    else {
      res.render('adminUser', { result: result.rows });
    }
  });
};

exports.post = (req, res) => {
  const id = req.body.x;
  adminUser.deleteRow(id, (err, result) => {
    if (err) error.catchError(req, res);
    else {
      res.render('adminUser');
    }
  });
};
