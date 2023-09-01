const express = require('express');
const RouterCategory = express.Router();
const categoryController = require('../controller/categoryController');
const categoryMiddleware = require('../middleware/categoryMiddleware');

RouterCategory.post('/add-category', [categoryMiddleware.validateCategoryName], 
 categoryController.createCategory);
RouterCategory.get('/getcategory', categoryController.getCategory);
RouterCategory.put('/update-category/:id', [categoryMiddleware.validateCategoryName],
categoryController.updateCategory);
RouterCategory.delete('/delete-category/:id', categoryController.deleteCategory);

module.exports = RouterCategory;