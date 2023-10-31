const express = require('express');
const { login, signUp, test } = require('../controller/loginController');
const {newData} = require('../controller/locationController');
const router = express.Router();


router.post('/login', login);
router.post('/signUp', signUp);
router.post('/test', test);
router.post('/newData', newData);

module.exports = router;