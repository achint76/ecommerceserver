const express = require('express');
const RouterOrderDetails = express.Router();
const orderdetailsController = require('../controller/orderdetailsController');


RouterOrderDetails.post('/add-orderdetails', orderdetailsController.createOrderDetails);
RouterOrderDetails.get('/getorderdetails', orderdetailsController.getOrderDetails);

RouterOrderDetails.delete('/delete-orderdetails/:id', orderdetailsController.deleteOrderDetails);

module.exports = RouterOrderDetails;