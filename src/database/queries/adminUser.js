const db_connection = require('./../db_connect');

const selectUser = (cb) => {
  const sql =
    'SELECT  id, user_name, email from users';

  db_connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};


const deleteUser = (id, cb) => {
  const sql = {
    text: 'DELETE FROM users WHERE id=$1 ',
    values: [id],
  };

  db_connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};

const deleteProject = (id, cb) => {
  const sql = {
    text: 'DELETE FROM projects WHERE id=$1 ',
    values: [id],
  };

  db_connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res);
  });
};

module.exports = { selectUser, deleteUser, deleteProject };
