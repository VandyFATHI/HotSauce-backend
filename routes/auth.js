const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/UserController');

router.post('/signup', userCtrl.CreateUser);
router.post('/login', userCtrl.Login);

module.exports = router;
