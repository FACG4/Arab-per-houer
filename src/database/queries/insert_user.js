const connection = require('./../db_connect');

const signupInsert = (username, hash, email, firstName, lastName,type, cb) => {
  const sql = {
    text: 'INSERT INTO users(user_name, password, email, first_name, last_name,   type_role,position) VALUES($1,$2,$3,$4,$5,$6,$7) ',
    values: [username, hash, email, firstName, lastName, type, position],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {
      cb(null, res);
    }
  });
};

module.exports = signupInsert;
