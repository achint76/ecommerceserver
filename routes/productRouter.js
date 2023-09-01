const express = require('express');
const RouterProduct = express.Router();
const productController = require('../controller/productController');


RouterProduct.post('/add-product', productController.createProduct);
RouterProduct.get('/getproduct', productController.getProduct);
RouterProduct.put('/update-product/:id', productController.updateProduct);
RouterProduct.delete('/delete-product/:id', productController.deleteProduct);

module.exports = RouterProduct;