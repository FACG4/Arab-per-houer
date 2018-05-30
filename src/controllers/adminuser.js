const adminUser = require('./../database/queries/adminUser');


exports.get = (req, res) => {
  adminUser.selectUser((err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('adminUser', { result: result.rows });
    }
  });
};

exports.post = (req, res) => {
  const id = req.body.name;
  adminUser.deleteProj(id, (err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('adminUser');
    }
  });
};

