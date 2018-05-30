const insertQuery = require('../database/queries/insertProject');
const error = require('./error');

exports.get = (req, res) => {
  res.render('insertProject', { style: { style1: 'css/style.css', project: 'css/project.css', insertProject: 'css/insertProject.css'}, id: req.userId, log: req.cookies.user });
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
          if (err) error.catchError(req, res);
          else {
            res.redirect('/');
          }
        },
      );
    }
  }
};
