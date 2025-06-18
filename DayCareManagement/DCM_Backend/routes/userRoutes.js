// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkRole = require('../middleware/roleCheck');

router.post('/register', userController.register);
router.post('/login', userController.login);
// Test route: GET /api/users
router.get('/', (req, res) => {
  res.json({ message: 'User route is working!' });
});


module.exports = router;
