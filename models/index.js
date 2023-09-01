const sequelize = require('../db/config');
const Category = require('./categoryModel');
const Product = require('./productModel')
const User = require('./userModel');
sequelize.sync();
module.exports = {
    Category,
    Product,
    User
};