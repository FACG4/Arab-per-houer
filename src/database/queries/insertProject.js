const db_connection = require('../db_connection');

const insertProjects = (Title,description,price,typeProjects , cb) => {

  let sql = {
    text: 'INSERT INTO Projects (title,description,price,typeProjects)' ,
    values: [title , description,price,typeProjects]
  };
  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = insertGoodsToUser ;
