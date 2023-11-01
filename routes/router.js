const express = require('express');
const { login, signUp, test } = require('../controller/loginController');
const {newData, getData} = require('../controller/locationController');
const router = express.Router();


router.post('/login', login);
router.post('/signUp', signUp);
router.post('/test', test);
router.post('/newData', newData); 
router.get('/getData', getData);

module.exports = router;