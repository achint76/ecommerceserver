const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const Inventory = sequelize.define('inventorytables',{
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
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "1"
    }

}, {
    timestamps: false,
    id: false
});

module.exports = Inventory;