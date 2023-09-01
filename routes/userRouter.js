const express = require('express');
const RouterUser = express.Router();
const userController = require('../controller/userController');
const userMiddleware = require('../middleware/userMiddleware');

RouterUser.post('/add-user', [userMiddleware.validateUserName], 
 userController.createUser);
RouterUser.get('/getuser', userController.getUser);
RouterUser.put('/update-user/:id', [userMiddleware.validateUserName],
userController.updateUser);
RouterUser.delete('/delete-user/:id', userController.deleteUser);

module.exports = RouterUser;