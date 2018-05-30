
const selectAllProject = require('./../database/queries/selectAllproject');
const search = require('./../database/queries/search.js');


exports.get = (req, res) => {
  selectAllProject((err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('home', { result: result.rows, log: req.cookies.user, style: { style: 'css/style.css' } });
    }
  });
};
exports.post = (req, res) => {
  const word = req.body.name;

  search(word, (err, r) => {
    if (err) throw new Error(err);
    else {
      res.render('home', { r: r.rows });
      console.log('search', r.rows);
    }
  });
};
