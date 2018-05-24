const db_connection = require('./../db_connect');


const selectProject = (id , cb) => {
  let sql = {
text:' SELECT Projects.* ,users.first_name,users.last_name  from Projects INNER JOIN users ON  projects.user_id=users.id where projects.id=$1',
    values: [id]
  };
  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = selectProject ;
