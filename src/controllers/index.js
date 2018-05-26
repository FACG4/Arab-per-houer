const express = require("express");
const router = express.Router();
const insertProject = require("./insertProject");
const home = require("./home");
const signup = require("./signup");
const login = require('./login');
const project = require('./singleProject');
const checkuser = require('./checkUser')

router.get("/", home.get);
// router.post("/", home.post);


router.get("/insertproject",checkuser,insertProject.get);

router.post("/insertproject", insertProject.post);

router.get("/signup", signup.get);
router.post("/signup", signup.post);

router.get('/login', login.get);
router.post('/login', login.post);
 router.get('/project/:id', project.get)

// const expressValidator = require("express-validator");
// router.use(expressValidator());

module.exports = router;
