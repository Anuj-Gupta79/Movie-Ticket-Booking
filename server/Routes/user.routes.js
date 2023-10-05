const express = require('express');
const userController = require('../Controllers/user.controller');
const authMiddleware = require('../Middleware/auth.middleware');

const router = express.Router();

router.post('/register', userController.register);
router.get('/getAll', authMiddleware, userController.getAllUser);
router.get('/getUserByEmail/:email', authMiddleware, userController.getUserByEmail);
router.post('/login', userController.loginUser);

module.exports = router;