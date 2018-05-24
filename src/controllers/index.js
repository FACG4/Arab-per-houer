const express = require("express");
const router = express.Router();
const insertProject = require("./insertProject");
const home = require("./home");
const signup = require("./signup");

router.get("/", home.get);
router.post("/", home.post);

router.get("/insert", insertProject.get);
router.post("/insertproject", insertProject.post);

router.get("/signup", signup.get);
router.post("/signup", signup.post);

const expressValidator = require("express-validator");
router.use(expressValidator());

module.exports = router;
