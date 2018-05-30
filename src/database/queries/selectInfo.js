const db_connection = require('./../db_connect');


const selectuser = (id, cb) => {
  const sql = {
    text: 'SELECT users.first_name,users.last_name,users.position,projects.title,projects.time from users INNER JOIN projects ON users.id = projects.user_id  where users.type_role = 1 and users.id=$1',
    values: [id],
  };

  db_connection.query(sql, (err, res) => {
    if (err) return cb(err);
    return cb(null, res);
  });
};


module.exports = selectuser;
