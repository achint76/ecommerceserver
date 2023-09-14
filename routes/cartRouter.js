const express = require('express');
const RouterCart = express.Router();
const cartController = require('../controller/cartController');
// const userMiddleware = require('../middleware/userMiddleware');
const loginMiddleware = require('../middleware/loginMiddleware')
const inventoryMiddleware = require('../middleware/inventoryMiddleware')

RouterCart.post('/add-cart',[loginMiddleware.userProfile],  cartController.createCart);
RouterCart.get('/getcart', cartController.getCart);
//RouterCart.put('/update-cart/:id', cartController.updateCart);
RouterCart.delete('/delete-cart/:id', cartController.deleteCart);

RouterCart.post("/addToCart",[loginMiddleware.userProfile],cartController.addtocart);

RouterCart.delete("/removeCart",[loginMiddleware.userProfile], cartController.cartremove);

module.exports = RouterCart; 