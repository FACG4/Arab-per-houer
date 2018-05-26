

const insertQuery = require('../database/queries/insertProject');

exports.get = (req, res) => {
  res.render('insertProject');
  console.log('inser', req.userName);
};
exports.post = (req, res) => {
  if (req.body) {
    console.log('ProjectData', req.body);
    const {
      title, description, price, type_project, userId,
    } = req.body;
    console.log('type_project', type_project);
    if (title.length > 0 && description.length > 0) {
      insertQuery.insertProject(
        title,
        userId,
        description,
        price,
        type_project,
        (err, result) => {
          console.log('result: ', result);
          if (err) throw new Error('error in posting project');
          res.redirect('/');
        },
      );
    }
  }
};
