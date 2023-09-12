const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const User = sequelize.define('usertable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
       type: DataTypes.STRING(20),
       allowNull: false 
    },
    email: { 
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},
{
    timestamps:false,
    id: false 
})
module.exports = User;