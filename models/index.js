const sequelize = require('../db/config');
const Category = require('./categoryModel');
const Product = require('./productModel')

sequelize.sync();
module.exports = {
    Category,
    Product
};