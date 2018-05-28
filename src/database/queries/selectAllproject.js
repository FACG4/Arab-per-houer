const db_connection = require('./../db_connect');


const selectAllproject = (cb) => {
  const sql = 'SELECT Projects.* ,users.user_name from Projects INNER JOIN users ON  projects.user_id=users.id limit 5';


  db_connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};

module.exports = selectAllproject;
