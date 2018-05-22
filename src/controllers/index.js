
const express = require('express');

const router = express.Router();


const home = require('./home');
const signup = require('./signup');
router.get('/', home.get);
router.post('/', home.post);
router.get('/signup', signup.get);
router.post('/signup', signup.post);




const expressValidator = require('express-validator');
router.use(expressValidator())

module.exports= router;
