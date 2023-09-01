const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const OrderDetails = sequelize.define('orderdetailstable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order_id: {
       type: DataTypes.INTEGER,
       allowNull: false 
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps:false,
    id: false 
})
module.exports = OrderDetails;