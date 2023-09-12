const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginMiddleware');
const cartlistingController = require('../controller/cartlistingController');

router.get("/cart-listing",loginMiddleware.userProfile,cartlistingController.cartlisting);

module.exports = router;