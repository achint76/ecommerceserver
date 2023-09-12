const sequelize = require('../db/config');
const Category = require('./categoryModel');
const Product = require('./productModel')
const User = require('./userModel');
const Cart = require('./cartModel');
const Order = require('./orderModel');
const OrderDetails = require('./orderdetailsModel');

User.hasMany(Order, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Order.belongsTo(User,{
    foreignKey: 'user_id',
});

User.hasMany(Cart, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Cart.belongsTo(User,{
    foreignKey: 'user_id',
});

Product.hasMany(Cart, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Cart.belongsTo(Product,{
    foreignKey: "product_id",
});

Product.hasMany(OrderDetails, {
    foreignKey: "product_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
OrderDetails.belongsTo(Product,{
    foreignKey: "product_id",
});

Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Product.belongsTo(Category,{
    foreignKey: "category_id",
});



sequelize.sync({force: false});

module.exports = { 
    Category,
    Product,
    User,
    Cart,
    Order,
    OrderDetails,
    sequelize
};