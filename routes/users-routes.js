const express = require('express');

const usersControllers = require('../controllers/users-conroller'); 

const router = express.Router();

router.get('/:pid', usersControllers.getUserById); 

router.get('/', usersControllers.getUsers); 

router.post('signup', usersControllers.signup)

router.post('login', usersControllers.login)

module.exports = router;