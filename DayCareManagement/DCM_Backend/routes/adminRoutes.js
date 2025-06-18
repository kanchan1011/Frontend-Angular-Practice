const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/roleCheck');
const adminController = require('../controllers/adminController');
const { getUsers } = require('../controllers/adminController');

router.get('/users', verifyToken, checkRole(['admin']), adminController.getAllUsersWithChildren);
router.get('/', verifyToken, getUsers); // Protected route
module.exports = router;
