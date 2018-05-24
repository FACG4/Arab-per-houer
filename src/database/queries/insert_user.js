const connection = require('./../db_connect');

const signupInsert = (username, hash, email, firstName, lastName, cb) => { 
  const sql = {
    text: 'INSERT INTO users(user_name, password, email, first_name, last_name) VALUES($1,$2,$3,$4,$5) ',
    values: [username, hash, email, firstName, lastName]
  };
  connection.query(sql, (err, res) => {
    console.log('erroe', err);
    if (err) cb(err);
    else {
      cb(null, res);
    }
  });
};

module.exports = signupInsert;

