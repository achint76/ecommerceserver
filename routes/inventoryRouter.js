const inventoryController = require('../controller/inventoryController');
const checkproductMiddleware = require('../middleware/checkproductMiddleware');
const express = require('express');
const router = express.Router();
router.post('/addtoinventory', [checkproductMiddleware.checkProduct], inventoryController.addtoinventory);

module.exports = router;