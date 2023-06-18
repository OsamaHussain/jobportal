const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { verifyAuth } = require('../middleware/jwtAuth');

// All Routes with Controller
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/getAllUsers', verifyAuth,  userController.getAllUsers);

module.exports = router;