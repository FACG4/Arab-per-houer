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


router.get('/', home.get);
router.post('/', home.post);

router.get('/logout', logout.get);

router.get('/admin/users', adminUser.get);
router.post('/admin/users', adminUser.post);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/insertproject', checkuser, insertProject.get);
router.post('/insertproject', insertProject.post);


router.get('/project/:id', checkuser, project.get);

router.post('/project/:id', checkuser, project.post);


router.get('/profile/:id', checkuser, profile.get);

router.get('/admin', checkuser, adminDashboard.get);
router.get('/admin/projects', checkuser, projectsAdmin.get);
router.post('/admin/projects', checkuser, projectsAdmin.post);

module.exports = router;
