const express = require('express');
const RouterOrder = express.Router();
const orderController = require('../controller/orderController');
//const orderMiddleware = require('../middleware/userMiddleware');

RouterOrder.post('/add-order', orderController.createOrder);
RouterOrder.get('/getorder', orderController.getOrder);
// RouterOrder.put('/update-user/:id', [userMiddleware.validateUserName],
// userController.updateUser);
RouterOrder.delete('/delete-order/:id', orderController.deleteOrder);

module.exports = RouterOrder;
