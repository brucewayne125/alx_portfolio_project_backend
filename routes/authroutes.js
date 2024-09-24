// Routes related to authentication
const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller');

router.post('/register', authcontroller.register);
router.post('login', authcontroller.login);
router.post('/logout', authcontroller.logout);

module.exports = router;
