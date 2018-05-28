const express = require('express');

const router = express.Router();
const insertProject = require('./insertProject');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const project = require('./singleProject');
const checkuser = require('./checkUser');
const profile = require('./clientProfile');
const logout = require('./logout');

router.get('/', home.get);
//
router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);
//
router.get('/insertproject',insertProject.get);
router.post('/insertproject', insertProject.post);


router.get('/project/:id', project.get);

router.get('/logout', logout.get);



module.exports = router;
