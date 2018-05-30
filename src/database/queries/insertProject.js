const db = require('./../db_connect');

const insertProject = (title, userId, description, price, type_project, cb) => {
  const sql = {
    text:
      'INSERT INTO projects (title, user_id, description, price, type_project) VALUES ($1,$2, $3, $4, $5)',
    values: [title, userId, description, price, type_project],
  };

  db.query(sql, (err, result) => {
    if (err) return cb(err);
    return cb(null, result);
  });
};

module.exports = insertProject;

