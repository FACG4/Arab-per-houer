
const selectAllProject = require('./../database/queries/selectAllproject');


exports.get = (req, res) => {
  selectAllProject((err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('home', { result: result.rows, log: req.cookies.user });
    }
  });
};

