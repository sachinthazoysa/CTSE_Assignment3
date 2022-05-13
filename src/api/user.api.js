const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');

module.exports = () => {
    router.post('/', controller.addUser);
    router.get('/', controller.getAllUsers);
    router.get('/val', controller.userValidation);
    router.get('/:id', controller.getUser);
    router.delete('/:id', controller.deleteUser);
    router.put('/:id', controller.updateUser);
    return router;
}