const sequelize = require('../db/config')

const {DataTypes} = require('sequelize');
const Product = sequelize.define('producttable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_name: {
        type: DataTypes.STRING(50),
        allowNull: false

    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: true 
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps:false,
    id: false
})

module.exports = Product;