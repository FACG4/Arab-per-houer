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


// DELETE FROM users WHERE id=1;

// DELETE FROM users USING projects WHERE users.id = projects.user_id

// 1
// 2
// DELETE FROM users WHERE users.id = (SELECT user_id FROM projects);

// DELETE FROM users USING projects WHERE users.id = projects.user_id

// SELECT  title  FROM projects WHERE title LIKE '%d%';
