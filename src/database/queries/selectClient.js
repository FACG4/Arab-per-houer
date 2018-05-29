const db_connection = require("./../db_connect");

const selectClient = (id, cb) => {
  const sql = {
    text:
      "select users.email, users.first_name from users inner join projects on users.id=projects.user_id where projects.id = $1 limit 1",
    values: [id]
  };
  db_connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};

module.exports = selectClient;
