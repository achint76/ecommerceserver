const express = require('express');
const RouterCart = express.Router();
const cartController = require('../controller/cartController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterCart.post('/add-cart',  cartController.createCart);
RouterCart.get('/getcart', cartController.getCart);
//RouterCart.put('/update-cart/:id', cartController.updateCart);
RouterCart.delete('/delete-cart/:id', cartController.deleteCart);

module.exports = RouterCart;