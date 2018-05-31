const express = require('express');

const router = express.Router();
const insertProject = require('./insertProject');
const home = require('./home');
const signup = require('./signup');
const login = require('./login');
const project = require('./singleProject');
const checkuser = require('./checkUser');
const profile = require('./clientProfile');
const adminUser = require('./adminuser');
const projectsAdmin = require('./projectsAdmin');
const adminDashboard = require('./adminDashboard');
const logout = require('./logout');
const checkadmin = require('./checkadmin');
const err = require('./error');
const homeProject = require('./homeProject.js');

router.get('/404', err.catchError);
router.get('/', home.get);
router.post('/', home.post);

router.get('/logout', logout.get);


router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);


router.get('/insertproject', checkuser, insertProject.get);
router.post('/insertproject', checkuser, insertProject.post);


router.get('/project/:id', checkuser, project.get);

router.post('/project/:id', checkuser, project.post);


router.get('/profile/:id', checkuser, profile.get);

router.get('/admin', checkuser, checkadmin, adminDashboard.get);

router.get('/admin/projects', checkuser, projectsAdmin.get);
router.post('/admin/projects', checkuser, projectsAdmin.post);

router.get('/admin/users', adminUser.get);
router.post('/admin/users', adminUser.post);

router.get('/homeProject', homeProject.get);
router.post('/homeProject', homeProject.post);

module.exports = router;
