const express = require("express");
const router = express.Router();
const insertProject = require("./insertProject");
const home = require("./home");

router.get("/insert", insertProject.get);
router.post("/insertproject", insertProject.post);

router.get("/", home.get);
router.post("/", home.post);
module.exports = router;
