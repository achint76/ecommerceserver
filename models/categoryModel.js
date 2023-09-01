const sequelize = require('../db/config')

const {DataTypes} = require('sequelize');
const Category = sequelize.define('categorytable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_name: {
        type: DataTypes.STRING(50),
        allowNull: false

    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps:false,
    id: false
})

module.exports = Category;