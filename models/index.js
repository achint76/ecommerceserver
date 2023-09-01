const sequelize = require('../db/config');
const Category = require('./categoryModel');
const Product = require('./productModel')
const User = require('./userModel');
const Cart = require('./cartModel');
const Order = require('./orderModel');
const OrderDetails = require('./orderdetailsModel');
sequelize.sync();
module.exports = {
    Category,
    Product,
    User,
    Cart,
    Order,
    OrderDetails
};