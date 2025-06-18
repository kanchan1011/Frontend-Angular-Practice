// routes/childRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const childController = require('../controllers/childController');
const checkRole = require('../middleware/roleCheck');
const upload = require('../middleware/upload');

router.post('/', verifyToken, childController.createChild);
router.get('/', verifyToken,checkRole(['admin']), childController.getChildren);

// POST /api/children/:id/upload-pic
router.post('/:id/upload-pic', verifyToken, upload.single('profilePic'), childController.uploadProfilePic);


module.exports = router;
