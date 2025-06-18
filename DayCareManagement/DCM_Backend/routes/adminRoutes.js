const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/roleCheck');
const adminController = require('../controllers/adminController');

router.get('/users', verifyToken, checkRole(['admin']), adminController.getAllUsersWithChildren);

module.exports = router;
