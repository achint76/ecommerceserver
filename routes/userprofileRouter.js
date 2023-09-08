const express = require('express');
const router = express.Router();

const loginMiddleware = require('../middleware/loginMiddleware');
const userprofileController = require('../controller/userprofileController');
router.get("/profile", loginMiddleware.userProfile, userprofileController.userProfile);

module.exports = router; 