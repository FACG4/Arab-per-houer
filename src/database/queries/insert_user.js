
const db_connection = require('../db_connection');

const bcrypt=require('bcryptjs')

const insertUsers = (Username ,firstName, lastName, email, password, cb) => {

    var salt=bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password,salt);
  console.log(Username ,firstName, lastName, email, passwordHash ,'dfgbhnjkml');

  let sql = {
    text: 'INSERT INTO users (fullName,firstName, lastName, email,  hashpassword) VALUES ($1, $2, $3 ,$4,$5)',
    values: [Username,firstName, lastName, email, passwordHash]
  };
  db_connection.query(sql, (err, res) => {

    if (err) {
      return cb(err);
    } else {
      cb(null, res)
    }
  });

};

module.exports = {
  insertUsers
};
