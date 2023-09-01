const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const Order = sequelize.define('ordertable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
       type: DataTypes.INTEGER,
       allowNull: false 
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE(6),
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    timestamps:false,
    id: false 
})
module.exports = Order;