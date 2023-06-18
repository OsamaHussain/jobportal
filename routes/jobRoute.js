const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobController');
const {verifyAuth} = require('../middleware/jwtAuth');

// All Routes with Controller
router.post('/insert', verifyAuth, jobController.insertPost);
router.post('/delete/:id', verifyAuth, jobController.deletePost);
router.post('/update/:id', verifyAuth, jobController.updatePost);
router.post('/getAllPosts', verifyAuth,  jobController.getAllPosts);

module.exports = router;