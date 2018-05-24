const connection = require('./../db_connect');
const getUser = (name, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE  user_name = $1',
    values: [name],
  };
  connection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = getUser;