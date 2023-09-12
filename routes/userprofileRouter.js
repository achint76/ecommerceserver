const express = require('express');
const router = express.Router();
const userprofileMiddleware = require('../middleware/userMiddleware');
const loginMiddleware = require('../middleware/loginMiddleware');
const checkoutMiddleware = require('../middleware/checkoutMiddleware')
const userprofileController = require('../controller/userprofileController');
const orderdetailsController = require('../controller/orderdetailsController');

router.get("/profile", loginMiddleware.userProfile, userprofileController.userProfile);

router.post("/checkOut", [loginMiddleware.userProfile, 
    checkoutMiddleware.checkOut], orderdetailsController.addingOrderDetails);

module.exports = router; 