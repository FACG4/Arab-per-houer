const express = require("express");
const router = express.Router();
const insertProject = require("./insertProject");
router.get("/insert", insertProject.get);

router.post("/insertproject", insertProject.post);
module.exports = router;
