const usersController = require('../controllers/user.controller');

const express = require('express');
const userRoutes = express.Router();

userRoutes.get('/', usersController.getAllUsers);
userRoutes.get('/:id', usersController.getUserById);
userRoutes.post('/', usersController.createUser);
userRoutes.patch('/:id', usersController.updateUser);
userRoutes.delete('/:id', usersController.deleteUser);

module.exports = userRoutes;
