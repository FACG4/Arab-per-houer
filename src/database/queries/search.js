const db = require('./../db_connect');

const search = (word, cb) => {
  const sql = {
    text:
      "SELECT  title  FROM projects WHERE title LIKE '% ' + $1 + '%'",
    values: [word],

  };

  db.query(sql, (err, result) => {
    if (err) return cb(err);
    return cb(null, result);
  });
};

module.exports = search;

