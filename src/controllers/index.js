const express = require("express");
const router = express.Router();
const insertProject = require("./insertProject");
const home = require("./home");
const signup = require("./signup");
// const search = require("./search");

router.get("/", home.get);
router.post("/", home.post);

router.get("/insertproject", insertProject.get);
router.post("/insertproject", insertProject.post);

router.get("/signup", signup.get);
router.post("/signup", signup.post);
// router.post("/search", search.post);

const expressValidator = require("express-validator");
router.use(expressValidator());

module.exports = router;
