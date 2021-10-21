const express = require('express');
const taskController = require('../controllers/errorController');
const router = express.Router();

router.get('*', taskController.getErrorPage);

module.exports = router;