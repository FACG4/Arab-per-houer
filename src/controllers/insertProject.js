

const insertQuery = require('../database/queries/insertProject');

exports.get = (req, res) => {
  console.log('in get project');
  res.render('insertProject');
};
exports.post = (req, res) => {
  if (req.body) {
    const {
      title, description, price, type_project, userId,
    } = req.body;

    if (title.length > 0 && description.length > 0) {
      insertQuery.insertProject(
        title,
        userId,
        description,
        price,
        type_project,
        (err, result) => {
          if (err) throw new Error('error in posting project');
          res.redirect('/');
        },
      );
    }
  }
};
