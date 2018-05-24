const db_connection = require('./../db_connect');


const selectProject = (id , cb) => {

  let sql = {
    text: 'SELECT * from Projects WHERE id = $1' ,
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
