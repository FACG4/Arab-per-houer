
const jwt = require('jsonwebtoken');
require('env2')('./config.env');

const secret = process.env.SECRET;
const insertQuery = require('../database/queries/insertProject');

exports.get = (req, res) => {
  res.render('insertProject', { style: { style1: 'css/style.css', project: 'css/project.css' }, id: req.userId });
};
exports.post = (req, res) => {
  if (req.body) {
    const {
      title, description, price, type_project,
    } = req.body;

    const userId = req.userId;
    if (title.length > 0 && description.length > 0) {
      insertQuery(
        title,
        userId,
        description,
        price,
        type_project,
        (err, result) => {
          if (err) console.log('ee', err);
          res.redirect('/');
        },
      );
    }
  }
};
