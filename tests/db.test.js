const test = require('tape');
const insertUser = require('../src/database/queries/insert_user.js');
const getLogin = require('../src/database/queries/get_login.js');

test('should insert users', ()=>{
  insertUser('fake','fake', 'fake','fake','fake', function(err, result) {
    t.equal(err, null, 'there is no err when inserting users')
    t.deepEqual(result, [], 'shoul insert data successfully')
    t.end()
  })
})

test('should get all users', ()=>{
  getLogin('fake', function(err, data) {
    t.equal(err, null , 'there is no err when get users')
    t.equal(data.length> 0, true, 'should get all data successfully')
    t.end()
  })
})
