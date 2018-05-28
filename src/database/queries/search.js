const db_connection = require('../db_connect');


const search= (title, cb) => {
  let sql = {
text:'SELECT * FROM projects WHERE title LIKE $1%',
    values: [title]
  };
  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = search ;
