
const express = require('express');

const router = express.Router();


const home = require('./home');
// const signup = require('./signup');
const project= require('./singleProject')

router.get('/', home.get);
router.post('/', home.post);
// router.get('/signup', signup.get);
// router.post('/signup', signup.post);
router.get('/project/:id',project.get)





// const expressValidator = require('express-validator');
// router.use(expressValidator())

module.exports= router;
