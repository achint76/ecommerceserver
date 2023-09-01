const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const Cart = sequelize.define('carttable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
       type: DataTypes.INTEGER,
       allowNull: false 
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    timestamps:false,
    id: false 
})
module.exports = Cart;